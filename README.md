# Random-Password-Generator-CK

In this homework I was required to make a random password generator.

I did this by creating a series of prompts that asked the user whether or not they:

A) Wanted to create a password
B) How long they wanted the password to be
C) Whether or not they wanted uppercase letters in the password
D) Whether or not they wanted lowercase letters in the password
E) Whether or not they wanted numbers in their password
F) Whether or not they wanted special characters in their password

Within these prompts were global variables that would come into play by the end of the password generator. The global variable possible_selection, which was added to the value of the prompts in order to see whether or not the variable in question was to be added to the password.

The password generator itself involves a for loop and includes other global variables whose values were the numbers/letters/characters corresponding to uppercase, lowercase, numbers, and special characters. 

At this point the password variable comes into play and its value was itself plus the possible_selection (which by this point had determined which variables were to be included), a math randomizer, and the length of the possible selection. The end result is the password as it appears on screen.