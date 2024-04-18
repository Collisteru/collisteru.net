# Testing HTML Elements

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

```python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
```

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



Inline math equation: $E = mc^2$. Display
math should get its own line like so:[^2]

[^2]: It’s time to put up or shut up.  The great thing about legal footnotes is that if you state a fact in a brief, you’d better have a footnote to back it up.  If you try to claim something (“It is well-established that courts can sanction parties after cases have been dismissed”), you’d better cite some cases or no one is going to pay much attention.  Think of how great that would be if the same standard was imposed on other professions – especially politicians!  What if a politician couldn’t make a claim (“Subsidizing the making of science fiction movies has been shown to increase the number of children interested in math and science”) without a footnote showing the support for their claim (See The George Lucas Foundation)?


$$\mathcal{O}(\log(n)) \equiv \mathbb{E}[1]$$


$$ \mathbb{E}[x_{i}]\approx \mu+\sigma\Phi^{-1}\left(\frac{i}{N+1}\right)\left[1+\frac{\left(\frac{i}{N+1}\right)\left(1-\frac{i}{N+1}\right)}{2(N+2)\left[\phi\left[\Phi^{-1}\left(\frac{i}{N+1}\right)\right]\right]^{2}}\right]$$

$$P(a|b) = \frac{P(b|a) \cdot P(a)}{(P(b|a) \cdot P(a)) + (P(b|\lnot a) \cdot P(\lnot a))} = \frac{0.05 \cdot 0.9}{((0.05 \cdot 0.9) + (0.95 \cdot 0.1))} = \frac{0.045}{((0.05 \cdot 0.9) + (0.95 \cdot 0.1))} = \frac{0.045}{(0.045 + (0.95 \cdot 0.1))} = \frac{0.045}{(0.045 + 0.095)} = \frac{0.045}{0.14} = 0.32$$

Color emphasis:

$$\color{red}{\text{red}}(x)$$

$$\color{blue}{\mathcal{O}(\log(n))} \equiv \color{red}{\mathbb{E}[1]}$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

<marquee>That's all, folks!  🐈  That's all, folks!  🐈   That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈    That's all, folks!  🐈  That's all, folks!  🐈      </marquee>