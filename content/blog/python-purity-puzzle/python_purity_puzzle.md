---
title: Prototype I
description: "A little python syntax puzzle."
thumbnail: "../icons/python_purity_puzzle_icon.png"
---

The puzzle requires knowledge of basic Python syntax. Given that, it's on the easy side

<img src="python_purity_puzzle_img.png">

### Transcription:

_Perfection is displayed not when there is nothing left to add, but when there is nothing left to take away._


```python linenums
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```