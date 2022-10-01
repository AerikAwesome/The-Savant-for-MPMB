/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This is the syntax for adding a new class to the sheet
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

var iFileName = "The Savant 4.4.1 [LaserLlama's work, transcribed by hohouyj, updated by Aerik].js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

ClassList["savant"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /^(?=.*savant).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "my" and "class" in it, disregarding capitalization). If this looks too complicated, just write: /myclass/i

	name : "Savant", //required; the name to use for the class

	source : ["GMB:LL", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

	primaryAbility : "\n \u2022 Savant: Intelligence;", //required; the text to display when citing the primary ability of the class

	prereqs : "\n \u2022 Savant: Intelligence 13;", //required; the text to display when citing the prerequisite for the class when multiclassing

	die : 8, //required; the type of hit die the class has (i.e. 10 means d10)

	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5], //required; the amount of ability score improvements (or feats) at each level. Note that there are 20 entries, one for each level. This example uses the Fighter's progression

	saves : ["Int", "Wis"], //required; the two save proficiencies.

	skills : ["\n\n" + toUni("Savant") + ": Choose two from Arcana, History, Insight, Investigation, Medicine, Nature, Perception, Persuasion, and Religion", "\n\n" + toUni("Savant") + ": Choose one from Arcana, History, Insight, Investigation, Medicine, Nature, Perception, Persuasion and Religion"], //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important! The first entry is for when the class is the primary class, the second entry is for when the class is taken later as part of a multiclass

    /* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : { // optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		primary : [["artisan's tools", 1]], // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		secondary : [["artisan's tools", 1]] // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
	},

	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, false, false, false], //required; the armor proficiencies if this is the first or only class
		[true, false, false, false] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, ["hand crossbow", "scimitar", "shortsword", "rapiers", "whips"]], //required; the weapon proficiencies if this is the first or only class
		[false, false, []] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	equipment : "Savant starting equipment:"+
		"\n \u2022two simple weapons -or- a shortsword;"+
		"\n \u2022a light crossbow and 20 bolts -or- two daggers;"+
		"\n \u2022one set of artisan's tools of your choice;"+
		"\n \u2022leather armor and a scholar's pack."+ //required; the text to display when citing the starting equipment
		"\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",

	subclasses : [["Academic Discipline"],[]],// ["archaeologist", "naturalist", "physician", "seeker", "tactician"]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!

	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.

	abilitySave : 4, //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want

		"adroit analysis" : { //note the use of lower case characters
			name : "Adroit Analysis", //required; the name of the class feature
			source : ["GMB:LL", 2], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
            description : desc([
				"Bonus action ability check using any Int or Wis-based skill which I am proficient in.",
				"Bonus action mark a creature I can see within 60ft",
				"can use Int for attack and damage against marked creature.",
				"If hit or spend 1 minute learn one of the following characteristics of your choice:",
				"its AC, max hp, movement speed, one ability score, or creature type.",
				"This mark lasts for 1 minute. It ends if I mark another creature."

            ]), //required; the text to put in the "Class Features" field
			action : ["bonus action", ""],
			calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (classes.known.savant && classes.known.savant.level && !v.isSpell && !v.isDC) {
							fields.Description += (fields.Description ? '; ' : '') + 'Androit Analysis: can use Int vs marked target';
						};
					},
				]
			}
		},

		"unarmored defense" : {
			name : "Unarmored Defense",
			source : ["GMB:LL", 2],
			minlevel : 1,
			description : "\n   " + "While not wearing armor and not wielding a shield,\n   my Armor Class is equal to 10 + Dexterity modifier + Intelligence modifier.",
			addarmor : "Unarmored Defense (Int)", //optional; a string of the name of the armour that is literally put in the Armor Description field when the class feature is applicable, and removed if not
		},

		"perfect recall" : {
			name : "Perfect Recall",
			source : ["GMB:LL", 2],
			minlevel : 1,
			description : desc([
				"If I spend at least 1 minute observing and committing something to memory,",
				"I can recall any information about my observations without an ability check."
            ]),
		},

		"intellect dice" : {
			name : "Intellect Dice",
			source : ["GMB:LL", 2],
			minlevel : 2,
            description : desc([
				"When I make an Intelligence, Wisdom, or Charisma check or saving throw,",
				"I can roll a bonus die and add it to the result.",
				"Use this feature after you roll, but before you know whether you succeed or fail."
                ]),
            additional : levels.map(function (n) {
                return (n < 5 ? "1d4" : n < 10 ? "1d6" : n < 15 ? "1d8": n < 20 ? "1d10" : "1d12")
            }),
			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Intellect Dice (Int, Wis, Cha)"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
			usages : "Intelligence + Wisdom modifier",
			usagescalc : "event.value = Math.max(1, (What('Int Mod') + What('Wis Mod')));",
			recovery : "short rest",
		},

        "potent observation":{
            name:"Potent Observation",
			source : ["GMB:LL", 3],
			minlevel : 2,
            description : desc([
				"When a creature I can see hits the target of my Adroit Analysis with an attack,",
				"I can use my reaction to increase the damage dealt by the attack.",
                ]),
            additional : levels.map(function (n) {
                return (n < 5 ? "1d4" : n < 10 ? "1d6" : n < 11 ? "1d8" : n < 15 ? "2d8": n < 20 ? "2d10" : "2d12")
            }),
            action : ["reaction",""]
        },

		"subclassfeature3" : { //You need at least one entry named "subclassfeatureX". It signals the sheet to ask the user for which subclass he would like to have. The level of this feature should match the level the class needs to select a subclass. Once a subclass is selected, any feature with "subclassfeature" in the object name in the class entry will be ignored.
			name : "Academic Discipline",
			source : ["GMB:LL", 2],
			minlevel : 3,
			description : "\n   " + "choose your Academic Discipline and put it in the \"Class\" field" + "\n   " + "Choose between Archaeologist, Investigator, Naturalist, Physician, or Tactician",
		},

		"accelerated reflexes" : {
			name : "Accelerated Reflexes",
			source : ["GMB:LL", 3],
			minlevel : 5,
			description : desc([
				"I can take additional reaction(s) per round.",
				"A single effect can only trigger one of my reactions.",
				"When you roll initiative, you can add your Intelligence Modifier, so long as you're not surprised"
			]),
            additional: levels.map(function(n,idx) {
                return [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2][idx]+" additional reactions";
            }),
			addMod: [{type:"skill", field:"Init", mod:"Int", text:"I can add my Intelligence modifier to initiative rolls, as long as I'm not surprised"}]
        },

        "expert student":{
            name:"Expert Student",
			source : ["GMB:LL", 3],
			minlevel : 5,
            description : desc([
				"At the end of a long rest, I can choose to learn one language,",
				"one tool, skill, or weapon proficiency of my choice,",
				"as long as there is an example on hand for myself to learn from.",
				"I can gain only one per long rest (lvl 7:or short rest) up to Prof. bonus.",
				]),
			usages : "Proficiency Bonus",
			usagescalc : "event.value = Math.max(1, How('Proficiency Bonus'));",
        },

		"Keen Awareness":{
            name:"Keen Awareness",
			source : ["GMB:LL", 3],
			minlevel : 7,
            description : desc([
				"You cannot be surprised unless you are incapacitated",
				"When you roll initiative, you can use Adroit Analysis"
				])
			//usages : "Intelligence modifier",
			//usagescalc : "event.value = Math.max(1, What('Int Mod'));",
        },

        "expert educator":{
            name:"Expert Educator",
			source : ["GMB:LL", 3],
			minlevel : 9,
            description : desc([
				"After a long rest, choose one skill, tool, or weapon proficiency or language I know.",
				"A number of creatures equal to my Int mod(min 1) that can hear me gain it.",
				"This benefit lasts until the end of my next long rest.",
				]),
			usages : "Intelligence modifier",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
		},
        "flawless observation":{
            name:"Flawless Observation",
			source : ["GMB:LL", 3],
			minlevel : 11,
            description : desc([
				"Can use Potent Observation even if the target is not marked by my Adroit Analysis.",
				"Potent Observation against marked creatures also gains bonus damage equal to my Int mod(min 1)."
                ]),
			additional : ["Intelligence modifier bonus damage"],
			eval : "RemoveAction(\"reaction\", \"Potent Observation\"); AddAction(\"reaction\", \"Flawless Observation\", \"Savant\")", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
			removeeval : "RemoveAction(\"reaction\", \"Flawless Observation\"); AddAction(\"reaction\", \"Potent Observation\", \"Savant\")", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
        },
        "unyielding will":{
            name:"Unyielding Will",
			source : ["GMB:LL", 3],
			minlevel : 14,
            description : desc([
				"If I fail a saving throw against being charmed, frightened, or stunned,",
				"I can choose to expend a use of unyielding mind to succeed instead.",
                ]),
            //usages : 1, //optional; number of times it can be used. This can be one value, but can also be an array of 20 values, one for each level. It is recommended to use a numerical value, but if you use a string, include " per " at the end, like "1d10 per "
			//recovery : "short rest",
            savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Unyielding Will"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
        },
        "profound insight":{
            name:"Profound Insight",
			source : ["GMB:LL", 3],
			minlevel : 18,
            description : desc([
				"The target of my Adroit Analysis has disadvantage on any attack targeting me,",
				"and I have advantage on any saving throws it forces me to make."
                ])
        },
        "undisputed genius":{
            name:"Undisputed Genius",
			source : ["GMB:LL", 3],
			minlevel : 20,
            description : desc([
                "My Intelligence and Wisdom scores increase by 4. My maximum for those scores is now 24."
				]),
			scores : [0,0,0,4,4,0],
			scoresMaximum : [0,0,0,24,24,0]
        },
		
	}
}

AddSubClass( // this is the function you will be calling to add the variant

	"savant", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"archaeologist", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*archaeologist).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Archaeologist", //required; the name of the subclass

		source : ["GMB:ll", 4], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Archaeologist", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		// abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		// abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		// spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Student of History",
				source : ["GMB:LL", 4],
				minlevel : 3,
				description : desc([
					"if you spend 1 minute examining an object you are holding, you can ascertain its value, its civilization of origin,", 
					"and its approximate age. If it has any magical properties, you learn of them as if you had cast identify targeting the object."
				]),
				addMod : [
					{
						type : "skill",
						field : "History",
						mod : "Prof",
						text : "your proficiency bonus is doubled for History Checks"
					},
					{
						type : "skill",
						field : "Investigation",
						mod : "Prof",
						text : "your proficiency bonus is doubled for Investigation Checks"
					}
				], 
				skillstxt : "\n\n" + toUni("Archaeologist (Student of History)") + ": you gain proficiency in the History and Investigation skill, your proficiency bonus is doubled for any ability check you make with those skills; if already proficient, choose another skill of your choice from the savant skill list.",
				skills : ["History", "Investigation"],
			},
			"subclassfeature3.1" : {
				name : "Adventuring Academic",
				source : ["GMB:LL", 4],
				minlevel : 3,
				description : desc([
					"Gain proficiency with improvised weapons",
					"Gain a climbing speed equal to your walking speed.",
					"Can use Intellect Dice for Dexterity checks and saving throws.",
					"Can expend a use of Expert Student to ignore class, race or alignment restrictions to attune to a magic item.",
					"Can use a bonus action on your turn to use a magic item that normally takes an action."
				]),
				savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Intellect Dice(Dex)"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
				},
			},

			"subclassfeature6" : {
				name : "Daring Determination",
				source : ["GMB:LL", 4],
				minlevel : 6,
				description : desc([
					"My Adroit Analysis target cannot make opportunity attacks against me.",
					"When targeted with an opportunity attack, I can use my reaction to impose disadvantage.",
					"My saves vs. traps have a bonus equal to my Int mod, negate damage on success and halve it on failure"
				]),
				savetxt : { text : ["save vs. traps: +int, fail \u2015 half dmg, success \u2015 no dmg"] }
			},
			"subclassfeature13" : {
				name : "Lore Master",
				source : ["GMB:LL", 4],
				minlevel : 13,
				description : desc([
					"If you observe a place, person or object for at least one hour,",
					"you can recall information about it as if you had cast the Legend Lore spell,",
					"The target does not need to be legendary for this.",
					"Starting at 17th level, you only need to observe for 1 minute."
				])
			},
			"subclassfeature17" : {
				name : "Master Archaeologist",
				source : ["GMB:LL", 4],
				minlevel : 17,
				description : desc([
					"You are resistant to damage from spells and magical effects.",
					"Once per day when you finish a short rest, you can cause one magic item to regain all of its expended charges that it would normally regain at the end of a long rest"
				]),
				dmgres : ["spells","magical effects"],
				usages: 1,
				
			},
		}
	}
);