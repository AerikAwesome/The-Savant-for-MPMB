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

var iFileName = "The Savant 4.7.1 [LaserLlama's work, transcribed by hohouyj, updated by Aerik].js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
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
		[true, false, ["shortsword"]], //required; the weapon proficiencies if this is the first or only class
		[false, false, []] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],

	equipment : "Savant starting equipment:"+
		"\n \u2022a simple weapon -or- a shortsword;"+
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
				"Bonus action mark a creature I can see within 60ft",
				"Concentrate on Mark as if concentrating on a spell (Int save)",
				"Advantage on ability check using any Int or Wis-based skill to analyze or recall",
				"I can use Int for weapon attack and damage against marked creature.",
				"If hit or spend 1 minute learn one of the following characteristics of your choice:",
				"its AC, max hp, movement speed, or creature type.",
				"This mark lasts indefinitely. It ends if I mark another creature, if the creature is Hidden, or I lose concentration."

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
		"predictive defense" : {
			name : "Predictive Defense",
			source : ["GMB:LL", 2],
			minlevel : 1,
			description : desc([
				"I can use Int instead of Dex when calculating AC.",
				"As long as I am not incapacitated, my Mark has disadvantage on any attack roll against me"	
			]),
			extraAC : {
				mod: "Int-Dex",
				name: "Predictive Defense",
				text: "I can use Int instead of Dex when calculating AC."
			}
		},
		"scholarly pursuits" : {
			name : "Scholarly Pursuits",
			source : ["GMB:LL", 2],
			minlevel : 2,
			description : desc([
				'Use the "Choose Feature" button above to add Scholarly Pursuits to the sheet'
            ]),
			additional: levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 2 : (n < 8 ? 3 : (n < 12 ? 4 : (n < 16 ? 5 : 6)))) + " pursuits followed"
			}),
			extraname: "Scholarly Pursuit",
			extrachoices: ["//TODO"],
			extraTimes: levels.map(function (n) {
				return n < 2 ? "" : (n < 4 ? 2 : (n < 8 ? 3 : (n < 12 ? 4 : (n < 16 ? 5 : 6))))
			}),
			"astrology":{
				name: "Astrology",
				description: desc([
					"During a long rest when I can see the night sky, roll 1d20.",
					"Record the number rolled. You can replace any attack roll, saving throw, or ability check with this number.",
					"You must use this feature before you roll. The number can only be used once, and is lost at the next long rest."
			])
			},
			"falconry":{
				name: "Falconry",
				description: desc([
					"You gain a Falcon companion which uses the Hawk statblock, but with an Int of 8.",
					"You can communicate simple ideas with your Falcon using simple gestures and sounds.",
					"In combat it shares your initiative and acts on your turn. It can move and use its reaction on its own.",
					"It only takes the Dodge action unless you use a bonus action to command it to take another action.",
					"If you're incapacitated, your Falcon acts on its own. If your falcon falls to 0 hit points it makes death saving throws as a player would.",
					"Should your Falcon die, you can track and train another Falcon over 8 hours using 5gp worth of bait."
				]),
				//TODO: Add falcon companion page
			},
			"fencing":{
				name: "Fencing",
				description: desc([
					"You gain proficiency with long swords, rapiers, and scimitars.",
					"When a creature you can see targets you with a melee attack while you are wielding one of these weapons, you can use your reaction to roll your Intellect Dice and add its result to your AC against the attack.",
					"If the attack misses, you can make one melee weapon attack against the attacker as part of the same reaction."
				]),
				//TODO: Add reaction
			},
			"marksmanship":{
				name: "Marksmanship",
				description: desc([
					"You gain proficiency with all martial ranged weapons.",
					"When you make a ranged weapon attack, you can use your Intellect Die in place of the weapon's damage die.",
					"Moreover, if your setting includes firearms, and your savant has been exposed to the inner workings of such devices, they are considered to be proficient with all firearms."
				]),
				//TODO add proficiencies
			},
			"linguistics":{
				name: "Linguistics",
				description: desc([
					"You learn to speak, read, and write a number of languages equal to your Intelligence modifier.",
					"Whenever you make a Persuasion check while speaking with a creature in its native tongue (not Common) you can treat a roll of 9 or lower on the d20 as a 10."
				]),
				//TODO add languages
			},
			"perfect recall":{
				name: "Perfect Recall",
				description: desc(["todo"])
			},
			"riddles":{
				name: "Riddles",
				description: desc(["todo"])
			},
			"secrets & whispers":{
				name: "Secrets & Whispers",
				description: desc(["todo"])
			},
			"skill mastery":{
				name: "Skill Mastery",
				description: desc(["todo"])
			},
			"traditions":{
				name: "Traditions",
				description: desc(["todo"])
			}
		},
		"wondrous intellect" : {
			name : "Wondrous Intellect",
			source : ["GMB:LL", 2],
			minlevel : 2,
            description : desc([
				"When I make an Intelligence or Wisdom ability check or saving throw, or a damage roll against my Mark",
				"I can roll my Intellect Die and add it to the result.",
				"When a creature that can see or hear you hits your Mark with an attack, I can use my reaction to grant it a bonus to damage equal to my Intellect Die",
				"At certain levels, my Intellect Die increases:"
                ]),
            additional : levels.map(function (n) {
                return (n < 5 ? "1d6" : n < 10 ? "1d8" : n < 15 ? "1d10": "1d12")
            }),
			savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Intellect Dice (Int, Wis)"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
			action: ["reaction", ""]
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
				"When you roll initiative, you can add your Intelligence Modifier"
			]),
            additional: levels.map(function(n,idx) {
                return [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2][idx]+" additional reactions";
            }),
			addMod: [{type:"skill", field:"Init", mod:"Int", text:"I can add my Intelligence modifier to initiative rolls, as long as I'm not surprised"}]
        },
        "quick study":{
            name:"Quick Study",
			source : ["GMB:LL", 3],
			minlevel : 5,
            description : desc([
				"At the end of a long rest, I can choose to learn one language,",
				"one tool, skill, or weapon proficiency of my choice,",
				"as long as there is an example on hand for myself to learn from.",
				"I can gain only one per long rest (lvl 7:or short rest) up to Prof. bonus.",
				])
        },
		"Keen Awareness":{
            name:"Keen Awareness",
			source : ["GMB:LL", 3],
			minlevel : 7,
            description : desc([
				"You cannot be surprised unless you are incapacitated",
				"When you roll initiative, you can use a reaction to do one of the following before any other creatures act:",
				"- Use Adroit Analysis to Mark a creature I can see",
				"- Make an Intelligence ability check to recall information",
				"- Take either the Help, Ready or Search action"
				])
        },
        "flash of brilliance":{
            name:"Flash of Brilliance",
			source : ["GMB:LL", 3],
			minlevel : 9,
            description : desc([
				"As a reaction when a creature that can hear me within 30 feet makes a saving throw,",
				"I can grant it a bonus to its roll equal to one roll of my Intellect Die"
				]),
			action: ["reaction",""]
		},
		"predictive expert":{
			name:"Predictive Expert",
			source : ["GMB:LL", 3],
			minlevel: 10,
			description: desc([
				"As long as I am not incapacitated, I have advantage on any ability checks or saving throws my Mark forces me to make."
			])
		},
        "potent observation":{
            name:"Potent Observation",
			source : ["GMB:LL", 3],
			minlevel : 11,
            description : desc([
				"I can use a reaction to add a roll of my Intellect Die to any damage roll,",
				"as long as I can see the target and the attacker can hear me.",
				"Also, whenever I use my reaction to add my Intellect Die to to a damage roll against my Mark, I can roll the Intellect die twice and use the higher result."
                ]),
			additional : ["Intelligence modifier bonus damage"],
			eval : "AddAction(\"reaction\", \"Potent Observation\", \"Savant\");", //eval is custom code that is run when the feature is added. It is used here, because the "Second Wind" bonus action is removed, and replaced by the "Second Wind (+ Rallying Cry)" bonus action. If you instead just want to add a bonus action for "Rallying Cry", use the action object (i.e. action : ["bonus action", ""],)
			removeeval : "RemoveAction(\"reaction\", \"Potent Observation\");", //removeeval is custom code that is run when the feature is removed. Here the "Second Wind (+ Rallying Cry)" bonus action is removed and replaced by the plain "Second Wind" bonus action
        },
        "unyielding will":{
            name:"Unyielding Will",
			source : ["GMB:LL", 3],
			minlevel : 14,
            description : desc([
				"I gain proficiency in Charisma saving throws.",
				"Whenever I am forced to make a Charisma saving throw I gain a bonus equal to a roll of an Intellect Die",
				"When an effect allows me to make an Int, Wis or Cha saving throw to avoid damage, I take no damage on a success and half on failure.",
                ]),
            savetxt : { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"
				text : ["Unyielding Will"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here
			},
			saves: ["Cha"]
        },
        "profound insight":{
            name:"Profound Insight",
			source : ["GMB:LL", 3],
			minlevel : 18,
            description : desc([
				"As an action, I can predict my Mark's next move. Until the start of my next turn,",
				"my Mark has disadvantage on all ability checks, attack rolls, and saving throws,",
				"and creatures of my choice have advantage on any saving throw my Mark forces them to make."
                ]),
			usages: 1,
			recovery: "short rest",
			action: ["action",""]
        },
        "undisputed genius":{
            name:"Undisputed Genius",
			source : ["GMB:LL", 3],
			minlevel : 20,
            description : desc([
                "My Intelligence scoreincrease by 4. My maximum for this score is now 24.",
				"Also, when you roll an Intellect Die and roll lower than your Int modifier, you can replace the roll with your Int modifier"
				]),
			scores : [0,0,0,4,0,0],
			scoresMaximum : [0,0,0,24,0,0]
        },		
	}
}

AddSubClass(
	"savant",
	"archaeologist",
	{
		regExpSearch : /^(?=.*archaeologist).*$/i,
		subname : "Archaeologist",
		source : ["GMB:ll", 4],
		fullname : "Archaeologist",
		features : {
			"subclassfeature3" : {
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
					"Gain a climbing speed equal to your walking speed.",
					"I ignore class, race or alignment restrictions to attune to a magic item, and count as a spellcaster using Int for this purpose.",
					"Whenever I use my action to Use an Object, scroll, potion, or magic item, I can make one attack as a bonus action."
				]),
				speed:{
					climb:{spd:"walk", enc:"walk"}
				}
			},

			"subclassfeature6" : {
				name : "Daring Determination",
				source : ["GMB:LL", 4],
				minlevel : 6,
				description : desc([
					"My Wondrous Intellect bonus applies to Dexterity ability checks and saving throws.",
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
					"The target does not need to be legendary for this, though if there is no lore you learn nothing.",
					"When you use a magic item, its save DC iq equal to 8 + your prof. bonus + your Int modifier:"
				])
			},
			"subclassfeature17" : {
				name : "Master Archaeologist",
				source : ["GMB:LL", 4],
				minlevel : 17,
				description : desc([
					"You are resistant to damage from spells.",
					"Once per day when you finish a short rest, you can cause one magic item to regain expended charges equal to your Intelligence modifier."
				]),
				dmgres : ["spells","magical effects"],
				usages: 1,
				recovery: "short rest"
			},
		}
	}
);