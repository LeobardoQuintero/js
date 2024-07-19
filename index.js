guests.BRUTUS = {
title: "Senator",
region: "Rome",
dietaryPreference: "Vegan",
pastGifts: ["Silver Dagger", "Marble Bust"],
};

guests.CICERO.pastGifts.push("Golden Lyre");

const antonyRegion = guests.ANTONY.region;

delete guests.CICERO;

const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

// Question 1

// Answer
/*
The region of ANTONY in the original guests object will be "Egypt". This is because objects 
in JavaScript are reference types. When we assign the object to a new variable, we're not creating 
a new copy of the object. Instead, both variables point to the same object in memory. Thus, changes 
made through one variable are reflected in the other.
  */
