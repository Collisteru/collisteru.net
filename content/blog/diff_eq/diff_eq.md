---
title: Notes on Differential Equations
description: Mostly summaries of solution methods
thumbnail: "../icons/diff_eqs_icon.png"
date: "2024-06-08T00:00:00"
last_updated: "2024-12-29T00:00:00"
---

Differential equations describe relationships between functions and their derivatives. We solve them by finding the set of functions that make the relationship true. Differential equations are important to us, as engineers and applied mathematicians, because they appear over and over again in science but are difficult to solve. In fact, <a href="https://math.stackexchange.com/questions/https://math.stackexchange.com/questions/3782499/is-there-a-reason-it-is-so-rare-we-can-solve-differential-equations3782499/is-there-a-reason-it-is-so-rare-we-can-solve-differential-equations">the vast majority of differential equations are not solvable analytically</a>. This class covers the tricks we use for the ones that are.

Notational note: for this class, $t$ is the independent variable and we solve for $y(t)$

<h2 id="classifying-differential-equations">Classifying Differential Equations</h2>
Classifying differential equations helps us quickly recognize patterns in the solvable ones.

We classify differential equations on three axes: <strong>Order</strong>, <strong>Linear vs. Nonlinear</strong>, and <strong>Ordinary vs. Partial</strong>

The <strong>order</strong> of a differential equation is the largest derivative present in the equation. A differential equation is <strong>linear</strong> iff it can be expressed in the following form:

 
$$
\begin{bmatrix}
a_1 & a_2 & a_3 & a_4 & ... & a_{(n)}
\end{bmatrix}
\cdot
\begin{bmatrix} 1 \\ y \\ y' \\ y'' \\ y^{(n)} \end{bmatrix} = g(t)
$$
 
In other words, the function y and its derivatives are (1) never raised to any power other than the first and (2) don’t appear “inside” other functions like $(y)$

A differential equation is partial if it contains partial derivatives; it is ordinary if it contains ordinary (univariate) derivatives. This class focuses on ordinary differential equations, or ODEs.

Note that there are also systems of differential equations in which we consider more than one at a time. They can typically be rewritten as differential equations involving vectors.

<h2 id="examples-of-differential-equations">Examples of Differential Equations</h2>
<ul>
<li>Newton’s Second Law, expressed as</li>
</ul>
 
$$
F(x, y) = m \cdot x''
$$
 
<ul>
<li>Verhulst’s famous equation for logistic growth of individual species</li>
<li>Fourier’s Heat Equation</li>
</ul>
<h2 id="solving-differential-equations">Solving Differential Equations</h2>

One of the most interesting features of differential equations is that they usually have <em>an infinite number of solutions</em>. Each one corresponds to a different value for the constant of integration, which you’ll remember from Calculus I and which we introduce when solving ODEs.

When your teacher asks for the <strong>general solution</strong> of an ODE, they want the formula (or set thereof) that describes all the solutions. These formulas leave the constant of integration unspecified. When you assign it a value, you transform the general solution into a <strong>real solution</strong>.

Watch out, however: discontinuities can introduce the need for more than one equation in the general solution. You need them all to be correct.

A linear algebraist would say that solutions to ODEs form a subspace of the set of continuously differential functions. For general solutions with only one constant, that subspace has only one dimension.

<strong>Direction Fields</strong> illustrate this principle. They chart how $y'$ varies along the $t$ and $y$ axes. The ODE’s solutions follow the slopes like gulls over wind steams.

<img src="https://tutorial.math.lamar.edu/classes/de/DirectionFields_Files/image015.png" style="width: 250px"/>

It is also no accident that direction fields resemble vector fields. Differential equations illustrate a specific path in the general fluid flow that vector fields express. This is one of the features that makes them indispensible to science.

<h2 id="solving-linear-odes">Solving Linear ODEs</h2>

<h3 id="homogeneous-linear-odes">Homogeneous Linear ODEs</h3>

The right-hand side is zero and the left-hand side is a linear combination of the function and its derivatives. One example looks like the following:

 
$$
y' - y  = 0
$$
 
Just add $y$ to both sides and integrate. You can do this if you have an arbitrary-order derivative of $y$ on one side and a $g$ on the other.

<h3 id="nonhomogeneous-linear-odes">Nonhomogeneous Linear ODEs</h3>

You can also solve a nonhomogeneous first-order linear ODE in the following form:

 
$$y' + p(t) y = g(t)$$
 
… by multiplying all terms by an integrating factor.

This integrating factor is $  e^{\int p(t)}   $

And the solution is:

 
$$y = \frac{1}{\mu} (\int \mu g + C) $$
 
(Usually the hardest part of this type of problem is integrating $g(t)$, which may require integration by parts, a complicated U-substitution, or both.)s

Once you’ve solved for an ODE’s general solution, an initial value problem will give you an expression of the form $y(a) = b$ and ask you to solve for C as well.

<ul>
<li>WATCH OUT: Solutions containing t raised to negative or fractional powers are often domain-limited. Check for singularities or individual constant solutions like t = 0.</li>
</ul>

<h2 id="separation-of-variables">Separation of Variables</h2>


You can do this if your equation can be expressed as:
 
$$ y' = T(t)Y(y)$$
 
In this case, you can manipulate it into this form:

 
$$ 
dy/dt = T(t) \cdot Y(y) 
$$
$$
Y^{-1}(y) dy = T(t) dt
$$
 
My warning from earlier applies here with special force. The manipulation above often results in domain-limited curves. After you solve for the general solution, always check the domain. You may need to solve for y’s domain, then backsolve for the restrictions on x.

<h2 id="exact-equations">Exact Equations</h2>

An <em>exact equation</em> appers in standard form like this:

 
$$
M(t, y) dt + N(t, y) dy = 0
$$
 
Where there exists a function $\psi $ such that:

 
$$
M = \frac{\partial \psi}{\partial t} , N = \frac{\partial \psi}{\partial y}
$$
 
We call $ \psi $ the <strong>scalar potential</strong>, and a theorem by Poincaré guarantees its existence so long as $ M_y = N_t $.

If you know that $ M_y = N_t $, one way to find the scalar potential is just to look at M and N and find by inspection a function $ \psi$ such that $ \psi_x = M $ and $ \psi_y = N $

Another method is a line integral, where the line is an L-shape that goes only horizontally at first from $ (0, 0) $ to $ (x, 0) $ and then all vertically from $ (x, 0) $ to $ (x, y) $.

For the first part of that two-part line integral, note also that y is always zero, so any term with y is zero.

<h3 id="making-exact-equations-with-integrating-factors">Making Exact Equations with Integrating Factors</h3>

We can sometimes turn a non-exact equation into one that is exact with an integrating factor. We find a positive function $(t, y)$ such that

$$(\mu M )_y = ( \mu N)_t$$
 
This equation is <em>usually</em> harder to solve than the original ODE. There are two cases when it isn’t: when $\mu$ is a function solely of $ t $ and when it is a function solely of $ y $. In both cases, relatively easy differential equations that solve for $ \mu $ can be found by solving the above equation. Keep in mind that, when $ \mu$ is a function solely of $x$, $\mu_y = 0$. The opposite applies when $ \mu $ is a function solely of $ y $.

If neither of these work, $\mu$ must be a function of both $x$ and $y$. Consider $ \mu(x, y) = x^m y^n ?$

<h2 id="change-of-variables">Change of Variables</h2>

In some cases, a change of variables can convert one type of ODE into another type that we can solve.

<h3 id="rationically-homogeneous-equations-rhes">Rationically Homogeneous Equations (RHEs)</h3>

I call them “rationically homogeneous” even though they’re actually just called “homogeneous” to distinguish them from the homogeneous equations discussed earlier.

RHEs come in the form $ y^{} = F(t, y) $, where F depends only on the ratio $y / t$.

We solve this with the change of variables $v = \frac{y}{t} $

<h3 id="bernoulli-differential-equations">Bernoulli Differential Equations</h3>

This is our first encounter with differential equations in which $ y $ is raised to a power other than one. <strong>Bernoulli Equations</strong> come in the form:

 
$$y^{\prime} + p(x)y = q(x)y^n $$
 
The crucial step to solving these is dividing the whole equation by $y^n$, leaving

 
$$y^{-n} y^{\prime} + p(x)y^{1-n} = q(x) $$
 
This isolates the RHS, allowing us to transform the equation into a classic linear first-order ODE with the following substitution:

 
$$v = y^{1-n} $$
 
which turns the above into

 
$$\frac{v^{\prime}}{(1-n)} + vp(x) = q(x) $$ 
 
and solve.

<h3 id="riccati-equations">Riccati Equations</h3>

The equation

 
$$
y' = a_0(t) + a_1(t)y + a_2(t)y^2
$$
 
is a <strong>Riccati equation</strong> if $a_0, a_1, a_2 $ are continuous and $a_2$ is not zero (if it is, the equation is just linear, and we can solve it using methods we already know.)

We can solve Riccati equations by knowing a <em>particular</em> solution $y_p$. Rewrite the equation using t and v, where

 
$$
v = y - y_p
$$
 
Then, solve this for y and replace v back to return to the original solution.

<h3 id="riccati-equations">Autonomous Differential Equations</h3>

Some differential equations don’t depend directly on t but instead only on y.These are known as <strong>autonomous</strong> and often crop up in nature.

Consider a poulation of jackrabbits in a field of boundless plenty. The only restriction on their growth is the number of rabbits available to breed and have children. The more rabbits there are, the more rabbit couplings can occur per gestational period and the more quickly the population grows. We model this with the equation below:

 
$$
\frac{dy}{dx} = ay
$$
 
These can usually be solved with separation of variables.

<h3 id="by-power-series">By Power Series</h3>

Sometimes we can convert an equation into a power series. Differentiate the equation to get another power series, and you can sometimes combine that information to get an expression that reproduces the coefficients. Even luckier, you might be able to use one of the series convergence formulas to get a continuous solution.

<h3 id="the-fundamental-theorem-of-ordinary-differential-equations">The Fundamental Theorem of Ordinary Differential Equations</h3>

All of the equations we’ve looked at so far have been “nice,” in that they’ve been carefully designed to fall into one of the forms that we can solve relatively easily. However, the general differential equation will not be so nice– in fact, there are many that we don’t know how to solve with analytic (algebraic) methods.

For all this difficulty, however, there is a ray of hope. <em>The Fundamental Theorem of Ordinary Differential Equations</em> tells us that a solution to an initial value problem always exists as a few (relatively weak) conditions are met.

Consider the following ODE:  
$$
y' = F(t, y), y(t0) = y0
$$
 

When F is a continuous function on some domain $$ in the Cartesian plane, there exists a certain range in that plane around the starting point where a function exists that solves that ODE. Moreover, if $F_y$ is continuous, then that solution will be unique.

This theorem is important for a number of reasons:

<ol type="1">
<li>It guarantees that for “nice” functions, a solution to the ODE will always exist, even if we might not be able to solve for it.</li>
<li>It guarantees that that solution will be unique if $F_y$ is continuous, which is often more important than knowing what that solution is.</li>
<li>It tells us that we can determine the maximal domain of the function solution without actually solving for the function– because that domain is precisely the minimum domain among $F()$ and $y()$.</li>
<li>From this theorem we can derive information about how the solutions to an ODE <em>vary</em> as the initial conditions vary. They do so smoothly, like a piece of hair being drawn out on a curler… and futhermore, solutions to the same ODE at different initial conditions (also known as integral lines) can be transformed (rectified) by an invertible function to become parallel lines.</li>
</ol>
However, keep in mind that this theorem is only actually useable under certain, specific circumstances– as always, watch out for discontinuities.

So far, we’ve only covered solutions to ODEs based on <em>analytical</em> methods, i.e. that are created by manipulating symbols. For many equations, this is impossible, and so we resort to numerical methods,. The upside of these is that they are valid for any differential equation. The downside is that they are mere approximations.

<h3 id="euler-method">Euler Method</h3>

Consider the following initial value problem:

$$
y' = F(t, y)
$$
$$
y(t_0) = y_{0}
$$
You can use Euler’s method to create a polygonal path that approximates the function on which it is defined.

You can show that there exists a sequence such that the limit of this polygonal path, as the number of polygons grows from more to more, is the original function that we were trying to approximate.

Remember that Euler’s method means:
 
$$
y_{(t+1)} = y(t) + F(t, y(t)) \cdot h
$$
 
Where $h$ is the step size. The approximation becomes better as $h$ decreases. Interestingly, the difference between the value of the differential equation at any point according to Euler’s method and its actual value at that point is linearly bounded by $h$:

 $$
|\phi_h(T) - \phi(T)| < Kh
 $$

K is a constant that varies based on the function F and the length of the total interval between the initial value and the point of extrapolation.

<h3 id="picard-method">Picard Method</h3>

The Euler Method approximates a point along a curve by tip-toeing along the curve’s edge towards the target number. The Picard Method chooses to approximate functions instead: given an initial guess $(t)$ for a solution in terms of $y$, the Picard Method can produce a better guess <em>ad infinitum</em> until we reach the desired accuracy.

The general formula:

 
$$
y(x) = y_0 + \int(x_0)^x f(t, y(t)) dt
$$
 
Your initial guess for $y(x)$ can be as bad as you want it to be, it can even be a constant. Plug it into the integral as $y(x)$ and the Picard method will produce something better. If your ODE is of a certain form, for example a linear ODE, successive iterations of Picard’s Method will actually produce a polynomial which could end up being the Taylor series expansion of the analytic solution.

The disadvantages of this method are that it converges slowly and is difficult to do by hand (unlike the Euler method). However, it does have the advantage of replacing the continuity condition with the weaker <strong>Lipschitz condition</strong>, which is true iff there exists a constant K such that

$$
|f(x_1) - f(x_2)| < K(x_1 - x_2)
$$
 
In other words, a function meets the Lipschitz condition at a point if all its other points lie within the two sectors of the Cartesian Plane defined by lines of slope +K and -K extending from that point.

So far, we have only considered first-order differential equations which is characterized at most by a function and its first derivative. Now, we will consider differential equations with higher derivatives, including second order and above.

We’ll mostly cover tricks to solve DEs in the following form:

$$
p_{1}y^{\prime\prime}+ p_{2}(t)y^{\prime}+p_{3}(t)y=g(t)
$$

There are two categories of equations in this form: <em>homogeneous</em> ones where $g(t) = 0$, and <em>nonhomogeneous</em> ones where $g(t) \neq 0 $. We’ll start with the homogeneous case, which is simpler.

<h2 id="homogeneous-linear-differential-equations">Homogeneous Linear Differential Equations</h2>

To abbreviate a long story, we derive from these equations a polynomial <em>characteristic equation</em>, and when we solve for the solutions of the characteristic polynomial, we’ll have a better idea of the form of the solutions to the original ODE. For example, when both functions $p$ are constant, the DE above corresponds to the characteristic equation

$$
r^2+p_1r+p_2 = g(t)
$$

If the solutions to this polynomial are $ \phi_1 $ and $ \phi_2 $ , then the solution to the original DE is:

$$
y = C_{1}\phi_1(t) + C_2\phi_2(t)
$$

When the two solutions are the same, it’s not enough to just combine these two terms– we still have to differentiate them somehow. In practice, we do this by multiplying one of the two terms by t, giving the following form:

$$
y = (C_1+C_2t)e^{\lambda t}
$$

(Apparently D’Alembert came up with this idea, and it’s a good example of intuition in resoning about differnetial equations).

When the two solutions are complex, <a href="https://en.wikipedia.org/wiki/Euler%27s_identity">Euler’s Identity</a> is used to express them purely in terms of functions on the reals. The typical solution lies in the following form:

$$
y = C_1e^{\alpha t}cos(\beta t) + C_2e^{\alpha t}sin(\beta t)
$$

Where $ \alpha $ is the real part of the complex solution and $ \beta $ is the imaginary part.

Note also that all of the fundamentals here also apply to higher-order differential equations.

<h2 id="nonhomogeneous-linear-differential-equations-the-method-of-undetermined-coefficients">Nonhomogeneous Linear Differential Equations: The Method of Undetermined Coefficients</h2>

What happens when $g(t)$ isn’t zero? Then we have a nonhomogeneous equation, and things get a little more interesting. Solutions to this type of equation will always appear in the form $y_h + y_p$, where $y_h$ is the “homogeneous” solution that we’ve already discussed, and $y_p$ is a “particular” solution that we derive from $g(t)$.

How do we find the particular solution? First, assume that $g(t)$ appears in the following form:

$$
g(t) = e^{\alpha t} (P(t)*cos(\beta t) + Q(t)sin(\beta t))
$$

Where P, Q are polynomials.

The Method of Undetermined Coefficients has us finding the particular solution directly from $g(t)$. The particular solution will ultimately appear in the following form:

$$
y_p = t^{s}e^{\alpha t} ((A_0 + A_1 + ... + A_nt^n cos \beta t + (B_0 + B_1t + ... + B_nt^n) sin \beta t))
$$

Importantly, $s$ relates to whether $+ i $ in the right-hand side is a solution to the characteristic polynomial. If it isn’t, then $s = 0$. If it is a solution, but only once (i.e. not a double root), then $s = 1$. If it’s a double root, then $s = 2$.

By the principle of superposition, if $g(t)$ isn’t in the special form we covered above but is instead a sum of functions in that special form, we can derive $y_p$ for each of those separate terms and add them for the final, correct solution.

At this point we have two groups of unknown coefficients to solve for: $C_1, C_2, … C_n $, which comes from the general solution, and $A, B, … $, which comes in with the particular solution.

For the first group of coefficients, plug in your intitial conditions and solve for the coefficient set through the resulting linear system.

Note that you’ll need at least as many initial conditions as you have coefficients.

<h2 id="an-interlude-for-euler-cauchy-equations">An Interlude for Euler-Cauchy Equations</h2>

Euler-Cauchy equations come in the form:

$$
t^2y'' + \alpha t y' + \beta y = g(t), \; \; t > 0
$$
We really shouldn’t be able to solve this, because the coefficients aren’t constant. However, there are still at least two solution methods-– in fact, this is the only known form of DE with non-constant coefficients that we always know how to solve!

That being said, some trickery is required. Let $ y = x^m $.

Given this, we also have:

$$
\frac{dy}{dx} = mx^{m-1} \\~\\
\frac{d^2y}{dx^2} = m(m-1)x^{m-2}
$$

Substituting this into the original equation gives:

$$
x^2 [r(r-1)x^{r-2}] + ax[rx^{r-1}] + by = 0 \\~\\
$$

$$
r(r-1)x^r + arx^r + bx^r = 0 \\~\\
$$

$$
r^2x^r - rx^r + arx^r + bx^r = 0 \\~\\
$$

$$
r^2 - r + ar _ b = 0 \\~\\
$$

$$
r^2 + (a-1)r + b = 0
$$

This comes in the form that we can solve.

<h2 id="the-wronskian">The Wronskian</h2>

Here is where you’ll learn why linear algebra is a prerequisite for differential equations. You see, vectors aren’t just bags of numbers– we can also describe solutions to DEs as linear combinations of functions in a vector space.

In the general solutions we gave two sections ago, every term is multiplied by a different arbitrary constant $C_n$. This means that a general solution is a sum of functions multiplied by constants, or a linear combination.

One question we often want to answer is whether the functions in the linear combination are <strong>linearly independent</strong>, i.e. can any one of them be expressed as a linear combination of the others.

Using the rules we’ve defined so far and some elementary calculus, we can construct <strong>the Wronskian</strong>, a useful tool for understanding differential equations and the relationships between them.

$$
W[f_1, f_2] = f_1f'_2 - f'_1 f_2
$$

If the Wronskian is nonzero for all t, then we know that $ _1 $ and $ _2 $ are linearly independent.

Alternatively, according to <a href="https://en.wikipedia.org/wiki/Abel%27s_identity">Abel’s Identity</a>:

$$
\text{Where} \: y'' + p_1(t)y' + p_2(t)y = 0 \\~\\
W = Ce^{-\int p_1}
$$

This also allows us to derive a second solution from the first. We can compute the Wronskian with Abel’s Identity and, knowing the first solution, plug them into the determinant equation for the Wronskian and produce a new differential equation that gives the other part of the general solution. This method is known as <strong>reduction of order</strong>.

However, the Wronskian can give us more…

<h2 id="variation-of-parameters">Variation of Parameters</h2>

What happens when $ g(t) $ isn’t in the correct form to use the Method of Undetermined Coefficients? As long as both functions of the general solution still exist, we can still compute the particular solution with the Wronskian, which relies on the Wronskian. The proper formula is:

$$
y_p = \frac{-\phi_1}{a} \int \frac{\phi_2 g}{W[\phi_1, \phi_2]} + \frac{\phi_2}{a} \int \frac{\phi_1 g}{W[\phi_1, \phi_2]}
$$

This works just as well with DEs with an order higher than two.

<h2 id="differential-operators">Differential Operators</h2>

An <strong>operator</strong> is a function on functions: it accepts one or more functions as input and returns one or more functions as an output. Differentiation is an operator; so is integration. There are many more operators than this and the differential operators involve differentiation in some way. This class briefly went over the Integral Operator, Convolution, and the Laplace Transform, but here I’ll focus entirely on the latter.

The <strong>Laplace Transform</strong> is an operator defined as:

$$
\mathfrak{L}y(s) = \int_0^\infty e^{-st} y(t) dt
$$

Along with Fourier Transforms, Laplace Transforms are the most important transforms in engineering. They’re used for analyzing linear time invariant systems, including the input / output response and stability and behavior in terms of bounded and unbounded output.

While we’re on the subject, let’s talk about another direct application of this sort of differential equation: damped oscillating systems.

<h2 id="damping-in-harmonic-oscillators">Damping in Harmonic Oscillators</h2>

Atoms are particles orbiting other particles, and all forms of light are oscillating waves. Therefore, both matter and light can be considered harmonic oscillators. Our world is made of them.

In a damped harmonic oscillator, friction is present that slows down the oscillation in proportion to the system’s current velocity. The faster the oscillator moves, the greater the damping is. Thereefore, the equation of motion becomes:

$$
mx'' = -kx - \gamma x', \gamma \geq\ 0
$$

$ \gamma $ must be nonzero in order for the equation to <strong>actually</strong> be damped, of course. This function exists in the standard form that we’ve already studied, so we can analyze it with the constant-polynomial methods we’ve already studied. In particular, three different scenarios arise in response to the value of $ $ in relation to a certain expression:

$$
\text{Underdamped}: \gamma^2 - 4mk < 0
$$

$$
\text{Critically Damped}: \gamma^2 - 4mk = 0, \text{or} \: y < \sqrt{4mk}.
$$

$$
\text{Overdamped}: \gamma^2 - 4mk > 0, \text{or} \:  y < \sqrt{4mk}.
$$
<h3 id="underdamped">Underdamped</h3>

The solution is

$$
x = Ae^{\frac{- \gamma}{2m}t} cos(\beta t - \phi)
$$

Which exponentially decays even as it oscillates. This is the “damping” that most of us are used to observing in the oscillations of everyday life: the system moves back and forth, with each subsequent <em>back</em> being less than the <em>forth</em> that preceded it, before eventually decaying to nothing.

<h3 id="overdamped">Overdamped</h3>

Imagine you’re in a swimming pool, dragging behind you a spring with a ball attached to its end. You stop and watch the spring slowly push against the depths, settling into its equilibrium position. By the time the spring is fully relaxed, the ball has lost whatever velocity it has and doesn’t overshoot.

The water is so viscous that it <em>overdamps</em> the ball. In mathematics, this looks like:

$$
y = C_1*e^{r_1 x}+C_2*e^{r_2 x}
$$

Because the coefficient of $ y’ $ is negative in the original equation, both of these functions represent exponential decay. The system decays to its equilibrium point and stays there.

<h3 id="critically-damped">Critically Damped</h3>

Critically damped systems occur when the damping is <em>just enough</em> to make sure that the system does not overshoot the equilibrium point, but not any more. This is desirable because a critically damped system moves more quickly towards equilibrium than one that is overdamped. In this case, the solution is:

$$
x = e^{-\omega_0t}(x_0 + (v_0 + \omega_0x_0)t)
$$

which is an exponential decay function multiplied by a linear function.

<h2 id="a-few-points-on-higher-order-differential-equations">A Few Points on Higher-Order Differential Equations</h2>
We may define the Wronskian for a differential equation with an arbitray order and an arbitrary number of solutions $ y_1 \ldots y_n $:

$$
W(y_1, y_2, ..., y_n) = \begin{vmatrix}
    y_1 & y_2 & \ldots & y_n \\
    y'_1 & y'_2 &  & \vdots \\
    \vdots &  & \ddots & \vdots \\
    y^{(n)}_1& \ldots & \ldots &  y_n^{(n)}
\end{vmatrix}
$$

Abel’s Identity also makes a return appearance to provide a nice identity for this case:

$$
W = Ce^{- \int p_1}
$$

Finally, we can also perform variation of parameters for equations of arbitrary order, but the way to do it is a bit weird. Define a new determinant of the following matrix:

$$
W_k = 
\begin{vmatrix}
\phi_1 & \ldots & 0 & \ldots & \phi_n \\ 
    \vdots &  & \vdots &  & \vdots \\ 
    \phi_1^{(n-2)} & \ldots  & 0 & \ldots  & \phi_n^{(n-2)} \\ 
    \phi_1^{(n-1)} & \ldots & 1 & \ldots & \phi_n^{(n-1)}
\end{vmatrix}
$$

(This is just the Wronskian with the $ k_{th} $ column replaced with a one-hot vector)

Then the particular solution of your DE is:

$$
y_p = \sum_{k=1}^{n} \phi_k \int \frac{gW_k}{W[\phi_1, \ldots, \phi_n]}
$$

<h2 id="systems-of-linear-odes">Systems of Linear ODEs</h2>

Systems are useful for describing situations where there are multiple continuously-varying quantities in interplay. Classic situations include predator-prey relationships and price relations in economics. There’s actually nothing fundamentally different about the way we solve these; we mostly just apply what we’ve learned already to vector equations. If this doesn’t speak to the power of linear algebra in analysis, I don’t know what does.

We write a system as:

$$
\textbf{x} = \textbf{F}(t) \textbf{x}
$$

$$
\textbf{x} = (x_1, \ldots, x_n)
$$

$ \textbf{F}  $ is an nxn matrix, and $ \textbf{X} $ is a column vector of equations.

Just like in the single-equation case, the solution to a homogeneous system (the right-hand side is zero) is a linear combination of continuous functions. However, in the systems case we have a vector of functions.

Plug the coefficients of the system into a matrix, then find the eigenvalues and eigenvectors of this matrix. When these eigenvalues are distinct, the general solution is

$$
C_1 e^{\alpha t} [ (cos(\beta t)\stackrel{\rightarrow}{p_1}) - sin(\beta t)  \stackrel{\rightarrow}{q_1} ] \\
\:  \: \; + \: C_2 e^{\alpha t} [ (cos(\beta t)\stackrel{\rightarrow}{p_2}) - sin(\beta t) \stackrel{\rightarrow}{q_2}]
$$

<h3 id="variations-of-parameters-with-systems">Variations of Parameters with Systems</h3>

Alright, but what if you have a nonhomogeneous system? The basic idea is the same, but the procedure is behind variation of parameters in this case is a little more involved.

We define the <strong>fundamental matrix</strong> of an IVP as:

$$
\Psi (t) = (\textbf{x}_1 (t) \ldots \textbf{x}_n(t))
$$

Your particular solution is:

$$
\textbf{x}_p = \Psi \int \Psi^{-1} \textbf{g}
$$

The above expression is simple to write and hellacious to compute. Make sure you remember the formula for the matrix inverse.

<h2 id="phase-planes-and-phase-portraits">Phase Planes and Phase Portraits</h2>

Remember how we mapped two-dimensional differential equations and the vector flows around them in part one? Well, here we do that with systems in arbitrary dimensions. Phase portraits record the trajectories of solutions of systems of differential equations across the planes of coordinates, with more coordinates corresponding to more equations.

When asked to sketch a phase portrait for a system, here’s what you should do:

<ul>
<li>Find the eigenvalues of the system</li>
<li>Find the eigenvectors that correspond to the eigenvalues. If the eigenvalues are real, then the eigenvectors will slash across the phase portrait, with each solution following them.</li>
</ul>

We can also classify an equilibrium solution into a number of different bins:

<ul>
<li><strong>Asymptotically stable</strong> solutions are ones which have a boundary such that all solutions that enter or start in that boundary eventually move to the origin. They include nodal sinks, star sinks, and spiral sinks.</li>
<li><strong>Stable but not asymptotically stable</strong> solutions are slightly weaker: they have a region such that no solution that enters or starts in that region ever escapes. Centers fall into this category.</li>
<li><strong>Unstable</strong> solutions have neither of these properties. They include nodal sources, improper nodal sources, star sources, spiral sources, and saddles.</li>
</ul>

Fun Fact: Hilbert’s 16th problem asks for the upper bound of the number of limit cycles of a polynomial system

$$
x' = P_n(x, y) \\~\\
y' = Q_n(x, y)
$$

This problem is still open for all n greater than 1!

<h2 id="boundary-value-problems">Boundary Value Problems</h2>

To wrap things up, we’ll consider a type of differential equation with different boundary conditions:

$$
y'' + \lambda y = 0 \\~\\
y(0) = y(\pi) = 0
$$

We still have two different initial conditions, but instead of $ y(0) = A, y’(0) = B $, we have two conditions that are both of $ y $.

Furthermore, it turns out that these boundaries are actually very strict! The solution is $ y = 0 $ unless $ \lambda $ is a perfect square, in which case the solution is equal to $ C \sin{nt} $.

Special thanks to Vikram Bhagavatula for help with editing, fact-checking, and applications.
