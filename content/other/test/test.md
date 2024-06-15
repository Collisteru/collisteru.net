---
title: Testing Collisteru.net
description: "A better test post."
thumbnail: "../swordmountain.png"
---

Paragraphs are separated by a blank line.

2nd paragraph. _Italic_, **bold**, `monospace`, and <u> underlined</u>. Itemized lists
look like:

- this one
- that one
- the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.
> Waltz, nymph, for quick jigs vex Bud. Sphinx of black quartz, judge my vow. Pack my box with five dozen liquor jugs. Glib jocks quiz nymph to vex dwarf. Jackdaws love my big sphinx of quartz. The five boxing wizards jump quickly. How vexingly quick daft zebras jump! Quick zephyrs blow, vexing daft Jim. Two driven jocks help fax my big quiz. The jay, pig, fox, zebra and my wolves quack! Sympathizing would fix Quaker objectives. A wizard’s job is to vex chumps quickly in fog. Watch Jeopardy!, Alex Trebek’s fun TV quiz game. By Jove, my quick study of lexicography won a prize! Waxy and quivering, jocks fumble the pizza. Fetching killjoy Mavis Wax was probed on the quay. “Yo, never mix Zoloft with Quik”, gabs Doc Jasper. One zany quaff is vodka mixed with grape juice and blood. Zitty Vicki smugly quipped in her journal, “Fay waxes her butt.” Hot Wendy gave me quasi-Kreutzfeld-Jacob pox. Jack’s pervy moxie quashed Bob’s new Liszt fugue. I backed Zevy’s qualms over Janet’s wig of phlox. Tipsy Bangkok panjandrums fix elections with quivering zeal. Mexican juntas, viewed in fog, piqued Zachary, killed Rob. Jaywalking Zulu chieftains vex probate judge Marcy Quinn. Twenty-six Excedrin helped give Jocko quite a firm buzz. Racy pics of bed hijinx with glam queen sunk Val. Why Paxil? Jim’s Bodega stocked no quince-flavor Pez. Wavy-haired quints of El Paz mock Jorge by fax. Two phony quacks of God bi-exorcize evil mojo.
>
> <cite>Author O.F. Quode</cite>

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺

This means there is support for many important languages:

Français:

On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).

Ellenes:

Λορεμ ιπσθμ δολορ σιτ αμετ, vιξ θτροqθε τορqθατοσ νε, τε προ ιλλθμ vιρισ, ιθσ τε cομμοδο cονcεπταμ. Cθ πορρο δομινγ σθσcιπιτ θσθ, ζριλ απειριαν σcριβεντθρ vισ νε. Εθμ σαδιπσcινγ νεγλεγεντθρ εα. Ιδ θσθ σιντ δεcορε λεγιμθσ, πρι ρεqθε λιβρισ ατ. Αθδιαμ σαπιεντεμ vισ ετ, νε ναμ φαβθλασ vερτερεμ μαλθισσετ. Ει δενιqθε περcιπιτ vιξ, ηισ ιδ ζριλ θβιqθε δελενιτι, σινγθλισ μνεσαρcηθμ ιν ηισ. Αφφερτ περιcθλα vολθπτατθμ εα ηασ, qθεμ μολλισ περιcθλα qθι εξ.

Hebrew (Note necessity of bdo tag for right writing direction):

<bdo dir="rtl">
כתב סרבול מיוחדים אל. אל בדף בארגז מתמטיקה ביוטכנולוגיה, צ'ט תיבת מתוך קלאסיים גם. דת אחרות העמוד כלל, העיר פולנית מדויקים אל שמו. מה הבאים לחשבון יוצרים לוח. סדר תורת טבלאות לויקיפדים של, למאמרים מיתולוגיה או אנא, מלא תורת אנתרופולוגיה את. כימיה ישראל בעברית בה שער, אם לחבר לחיבור מועמדים כלל.
</bdo>

A<sup>superscript</sup> and a <sub>subscript</sub>.

## An h2 header

Here's a numbered list:

1.  first item
2.  second item
3.  third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

Syntax highlighting is provided by prism.js. The theme is defined in gatsby-browser.js

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

```
define foobar() {
    print "Welcome to flavor country!";
}
```

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

Python:

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

C++:

```cpp
#include <stdio.h> 

#define N(a)       "%"#a"$hhn"
#define O(a,b)     "%10$"#a"d"N(b)
#define U          "%10$.*37$d"
#define G(a)       "%"#a"$s"
#define H(a,b)     G(a)G(b)
#define T(a)       a a 
#define s(a)       T(a)T(a)
#define A(a)       s(a)T(a)a
#define n(a)       A(a)a
#define D(a)       n(a)A(a)
#define C(a)       D(a)a
#define R          C(C(N(12)G(12)))
#define o(a,b,c)   C(H(a,a))D(G(a))C(H(b,b)G(b))n(G(b))O(32,c)R
#define SS         O(78,55)R "\n\033[2J\n%26$s";
#define E(a,b,c,d) H(a,b)G(c)O(253,11)R G(11)O(255,11)R H(11,d)N(d)O(253,35)R
#define S(a,b)     O(254,11)H(a,b)N(68)R G(68)O(255,68)N(12)H(12,68)G(67)N(67)

char* fmt = O(10,39)N(40)N(41)N(42)N(43)N(66)N(69)N(24)O(22,65)O(5,70)O(8,44)N(
            45)N(46)N    (47)N(48)N(    49)N( 50)N(     51)N(52)N(53    )O( 28,
            54)O(5,        55) O(2,    56)O(3,57)O(      4,58 )O(13,    73)O(4,
            71 )N(   72)O   (20,59    )N(60)N(61)N(       62)N (63)N    (64)R R
            E(1,2,   3,13   )E(4,    5,6,13)E(7,8,9        ,13)E(1,4    ,7,13)E
            (2,5,8,        13)E(    3,6,9,13)E(1,5,         9,13)E(3    ,5,7,13
            )E(14,15,    16,23)    E(17,18,19,23)E(          20, 21,    22,23)E
            (14,17,20,23)E(15,    18,21,23)E(16,19,    22     ,23)E(    14, 18,
            22,23)E(16,18,20,    23)R U O(255 ,38)R    G (     38)O(    255,36)
            R H(13,23)O(255,    11)R H(11,36) O(254    ,36)     R G(    36 ) O(
            255,36)R S(1,14    )S(2,15)S(3, 16)S(4,    17 )S     (5,    18)S(6,
            19)S(7,20)S(8,    21)S(9    ,22)H(13,23    )H(36,     67    )N(11)R
            G(11)""O(255,    25 )R        s(C(G(11)    ))n (G(          11) )G(
            11)N(54)R C(    "aa")   s(A(   G(25)))T    (G(25))N         (69)R o
            (14,1,26)o(    15, 2,   27)o   (16,3,28    )o( 17,4,        29)o(18
            ,5,30)o(19    ,6,31)o(        20,7,32)o    (21,8,33)o       (22 ,9,
            34)n(C(U)    )N( 68)R H(    36,13)G(23)    N(11)R C(D(      G(11)))
            D(G(11))G(68)N(68)R G(68)O(49,35)R H(13,23)G(67)N(11)R C(H(11,11)G(
            11))A(G(11))C(H(36,36)G(36))s(G(36))O(32,58)R C(D(G(36)))A(G(36))SS

#define arg d+6,d+8,d+10,d+12,d+14,d+16,d+18,d+20,d+22,0,d+46,d+52,d+48,d+24,d\
            +26,d+28,d+30,d+32,d+34,d+36,d+38,d+40,d+50,(scanf(d+126,d+4),d+(6\
            -2)+18*(1-d[2]%2)+d[4]*2),d,d+66,d+68,d+70, d+78,d+80,d+82,d+90,d+\
            92,d+94,d+97,d+54,d[2],d+2,d+71,d+77,d+83,d+89,d+95,d+72,d+73,d+74\
            ,d+75,d+76,d+84,d+85,d+86,d+87,d+88,d+100,d+101,d+96,d+102,d+99,d+\
            67,d+69,d+79,d+81,d+91,d+93,d+98,d+103,d+58,d+60,d+98,d+126,d+127,\
            d+128,d+129

char d[538] = {1,0,10,0,10};

int main() {
    while(*d) printf(fmt, arg);
}
```

All in a line:

```cpp
#include <stdio.h> char*_="XxTIHRCXCxTIHRXRCxTIHXHRCxTIXIHRCxTXTIHRCxXxTIHRCX"; int main(int l){for(l+=7;l!=putchar(010);++l);if(*(++_))main (*_!=88?(putchar(*_^073)|putchar(33))&1:0xffff2a8b);}
```

Haskell:

```hs
tabToComma :: Char -> Char
tabToComma '\t' = ','
tabToComma c   = c
main = interact (map tabToComma)
```


Javascript:

```js
function msg(){  
 alert("Hello Javascript");  
}  

```

Java:

```java
class HelloWorld {\
    public static void main(String args[])
    {
        System.out.println("Hello, World");
    }
}
```

Keywords for each language can be found here: https://prismjs.com/s

### An h3 header

Now a nested list:

1.  First, get these ingredients:

    - carrots
    - celery
    - lentils

2.  Boil some water.

3.  Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

4.  Chant the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis viverra nibh. Porttitor eget dolor morbi non arcu. Scelerisque in dictum non consectetur a erat nam at. Ut sem nulla pharetra diam sit amet nisl suscipit. Dui faucibus in ornare quam viverra orci sagittis eu. Tristique senectus et netus et malesuada fames ac turpis. Sed tempus urna et pharetra pharetra massa. Fringilla est ullamcorper eget nulla. Pellentesque sit amet porttitor eget dolor morbi. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Sagittis eu volutpat odio facilisis. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

<br />
<br />
<br />
<br />
<br />
<br />
<br />

#### An h4 header

Emojis 🐉 sure 🦊 are 🐱 fun ♞‽

Here's a link to [a website](http://foo.bar), and to a [local
doc](/). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


A horizontal rule follows.

---

##### An h5 header

~~The world is flat.~~  <mark>We now know that the world is round.</mark>

I'll style these if I ever need to use them.

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Central images on their own line can be specified like so:

![example image](https://mysticalpragmatics.net/images/ie-languages-evolution.png "An exemplary image")

The above Markdown is translated into the below HTML:

<!-- <\img src="https://tutorial.math.lamar.edu/classes/de/DirectionFields_Files/image015.png" style="width: 250px"\> -->

Warning: don't have certain lines (?) be too long as they will break the @media-based layout on mobile.

That's an online image. Local images can be specified like so:

<img title="collisteru antipixel" src="/collisteru_antipixel.png">

NOTE THAT LOCAL IMAGES *MUST* BE IN THE STATIC FOLDER. You can have subfolders in the static folder to organize things, but you must specify the full path to the image in the static folder.

Figure out how to position images

Inline math equation: $E = mc^2$. Display
math should get its own line like so:[^2]s

[^2]: It’s time to put up or shut up.  The great thing about legal footnotes is that if you state a fact in a brief, you’d better have a footnote to back it up.  If you try to claim something (“It is well-established that courts can sanction parties after cases have been dismissed”), you’d better cite some cases or no one is going to pay much attention.  Think of how great that would be if the same standard was imposed on other professions – especially politicians!  What if a politician couldn’t make a claim (“Subsidizing the making of science fiction movies has been shown to increase the number of children interested in math and science”) without a footnote showing the support for their claim (See The George Lucas Foundation)?


$$\mathcal{O}(\log(n)) \equiv \mathbb{E}[1]$$

NOTE AND TODO: Very long equations like below sometimes prevent the content element from properly narrowing on some very small screens.


$$ \mathbb{E}[x_{i}]\approx \mu+\sigma\Phi^{-1}\left(\frac{i}{N+1}\right)\left[1+\frac{\left(\frac{i}{N+1}\right)\left(1-\frac{i}{N+1}\right)}{2(N+2)\left[\phi\left[\Phi^{-1}\left(\frac{i}{N+1}\right)\right]\right]^{2}}\right]$$


$$P(a|b) = \frac{P(b|a) \cdot P(a)}{(P(b|a) \cdot P(a)) + (P(b|\lnot a) \cdot P(\lnot a))} = \frac{0.05 \cdot 0.9}{((0.05 \cdot 0.9) + (0.95 \cdot 0.1))} = \frac{0.045}{((0.05 \cdot 0.9) + (0.95 \cdot 0.1))} = \frac{0.045}{(0.045 + (0.95 \cdot 0.1))} = \frac{0.045}{(0.045 + 0.095)} = \frac{0.045}{0.14} = 0.32$$

Color emphasis:

$$\color{red}{\text{red}}(x)$$

$$\color{blue}{\mathcal{O}(\log(n))} \equiv \color{red}{\mathbb{E}[1]}$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

<marquee>That's all, folks!  🐈  That's all, folks!  🐈   That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈      </marquee>