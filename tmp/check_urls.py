import urllib.request
import re
import glob

urls = set()
for f in glob.glob("src/**/*.ts*", recursive=True):
    with open(f) as fp:
        for match in re.findall(r"https?://[^\s\"'`<>)]+", fp.read()):
            if "signone.sa" in match:
                urls.add(match)

print(f"Total signone.sa URLs found: {len(urls)}")
for u in sorted(urls):
    if "$" in u:
        print(f"TEMPLATE STRING (BUG): {u}")
        continue
    try:
        req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as resp:
            print(f"OK {resp.status} : {u}")
    except Exception as e:
        print(f"ERR {e} : {u}")
