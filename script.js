//read the values of the drop down menues
//use them to decide what spell lists to pull from
    //weighting doesn't yet exist, but it probably will so future proof it

const unearthedArcanaDoc = document.querySelector("#arcana");
const ritualDoc = document.querySelector("#ritual");

//grab the spell level selectors
const cantripDoc = document.querySelector("#cantrip");
const lvl1Doc = document.querySelector("#lvl1");
const lvl2Doc = document.querySelector("#lvl2");
const lvl3Doc = document.querySelector("#lvl3");
const lvl4Doc = document.querySelector("#lvl4");
const lvl5Doc = document.querySelector("#lvl5");
const lvl6Doc = document.querySelector("#lvl6");
const lvl7Doc = document.querySelector("#lvl7");
const lvl8Doc = document.querySelector("#lvl8");
const lvl9Doc = document.querySelector("#lvl9");

//grab the class type selectors
const artificerDoc = document.querySelector("#artificer");
const bardDoc = document.querySelector("#bard");
const clericDoc = document.querySelector("#cleric");
const druidDoc = document.querySelector("#druid");
const paladinDoc = document.querySelector("#paladin");
const rangerDoc = document.querySelector("#ranger");
const sorcererDoc = document.querySelector("#sorcerer");
const warlockDoc = document.querySelector("#warlock");
const wizardDoc = document.querySelector("#wizard");
//instead of having an all classes button, just have it be that no selection means all
// const allClassesDoc = document.querySelector("#allClasses");

const spellButton = document.querySelector("#getSpell");
const spellHolder = document.querySelector("#spellHolder");

//import only works in modules, so I'm just going to have to set my spell list on this page
    //that's fine, just annoying

//this is going to be a mess of if's i fear

//check boxes look like they don't return check or unchecked for some reason
    //need to do it with script, there isn't an inherent way to use it

//can't set them in a list, the list won't update apparently
    //it will just use their value when placed in the list
    //scratch that, change the list value in the handlers
let cantripBox = false;
let lvl1Box = false;
let lvl2Box = false;
let lvl3Box = false;
let lvl4Box = false;
let lvl5Box = false;
let lvl6Box = false;
let lvl7Box = false;
let lvl8Box = false;
let lvl9Box = false;

let allClassesBox = false;
let artificerBox = false;
let bardBox = false;
let clericBox = false;
let druidBox = false;
let paladinBox = false;
let rangerBox = false;
let sorcererBox = false;
let warlockBox = false;
let wizardBox = false;

let spellLevels = [
    cantripBox,
    lvl1Box,
    lvl2Box,
    lvl3Box,
    lvl4Box,
    lvl5Box,
    lvl6Box,
    lvl7Box,
    lvl8Box,
    lvl9Box
]

//the classes don't need a spellLevels list equivalent b/c they will be checked if the spell contains the spell


//can't set up 1 handler that reads a fed variable because it will call when added as a listener
function canBoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(cantripBox){
        cantripBox = false;
        spellLevels[0] = false;
    }
    else{
        //if false, make true
        cantripBox = true;
        spellLevels[0] = true;
    }
}

function lvl1BoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(lvl1Box){
        spellLevels[1] = false;
        lvl1Box = false;
    }
    else{
        //if false, make true
        spellLevels[1] = true;
        lvl1Box = true;
    }
}
function lvl2BoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(lvl2Box){
        spellLevels[2] = false;
        lvl2Box = false;
    }
    else{
        //if false, make true
        spellLevels[2] = true;
        lvl2Box = true;
    }
}
function lvl3BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl3Box){
        spellLevels[3] = false;
        lvl3Box = false;
    }
    else{
        //if false, make true
        spellLevels[3] = true;
        lvl3Box = true;
    }
}
function lvl4BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl4Box){
        spellLevels[4] = false;
        lvl4Box = false;
    }
    else{
        //if false, make true
        spellLevels[4] = true;
        lvl4Box = true;
    }
}
function lvl5BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl5Box){
        spellLevels[5] = false;
        lvl5Box = false;
    }
    else{
        //if false, make true
        spellLevels[5] = true;
        lvl5Box = true;
    }
}
function lvl6BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl6Box){
        spellLevels[6] = false;
        lvl6Box = false;
    }
    else{
        //if false, make true
        spellLevels[6] = true;
        lvl6Box = true;
    }
}
function lvl7BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl7Box){
        spellLevels[7] = false;
        lvl7Box = false;
    }
    else{
        //if false, make true
        spellLevels[7] = true;
        lvl7Box = true;
    }
}
function lvl8BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl8Box){
        spellLevels[8] = false;
        lvl8Box = false;
    }
    else{
        //if false, make true
        spellLevels[8] = true;
        lvl8Box = true;
    }
}
function lvl9BoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(lvl9Box){
        spellLevels[9] = false;
        lvl9Box = false;
    }
    else{
        //if false, make true
        spellLevels[9] = true;
        lvl9Box = true;
    }
}


function allClassesBoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(allClassesBox){
        //this is unchecking allClasses
        artificerDoc.disabled  = false;
        bardDoc.disabled  = false;
        clericDoc.disabled  = false;
        druidDoc.disabled  = false;
        rangerDoc.disabled  = false;
        sorcererDoc.disabled  = false;
        warlockDoc.disabled  = false;
        wizardDoc.disabled  = false;

        allClassesBox = false;
    }
    else{
        //if false, make true
        artificerDoc.disabled  = true;
        artificerDoc.checked  = false;
        bardDoc.disabled  = true;
        bardDoc.checked  = false;
        clericDoc.disabled  = true;
        clericDoc.checked  = false;
        druidDoc.disabled  = true;
        druidDoc.checked  = false;
        rangerDoc.disabled  = true;
        rangerDoc.checked  = false;
        sorcererDoc.disabled  = true;
        sorcererDoc.checked  = false;
        warlockDoc.disabled  = true;
        warlockDoc.checked  = false;        
        wizardDoc.disabled  = true;
        wizardDoc.checked  = false;

        allClassesBox = true;
    }
}
function artificerBoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(artificerBox){
        artificerBox = false;
    }
    else{
        //if false, make true
        artificerBox = true;
    }
}
function bardBoxHandler(event){
    event.preventDefault();
    //if true, make false
    if(bardBox){
        bardBox = false;
    }
    else{
        //if false, make true
        bardBox = true;
    }
}
function clericBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(clericBox){
        clericBox = false;
    }
    else{
        //if false, make true
        clericBox = true;
    }
}
function druidBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(druidBox){
        druidBox = false;
    }
    else{
        //if false, make true
        druidBox = true;
    }
}
function paladinBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(paladinBox){
        paladinBox = false;
    }
    else{
        //if false, make true
        paladinBox = true;
    }
}
function rangerBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(rangerBox){
        rangerBox = false;
    }
    else{
        //if false, make true
        rangerBox = true;
    }
}
function sorcererBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(sorcererBox){
        sorcererBox = false;
    }
    else{
        //if false, make true
        sorcererBox = true;
    }
}
function warlockBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(warlockBox){
        warlockBox = false;
    }
    else{
        //if false, make true
        warlockBox = true;
    }
}
function wizardBoxHandler(event){
    event.preventDefault();
    
    //if true, make false
    if(wizardBox){
        wizardBox = false;
    }
    else{
        //if false, make true
        wizardBox = true;
    }
}


cantripDoc.addEventListener("change", canBoxHandler);
lvl1Doc.addEventListener("change", lvl1BoxHandler);
lvl2Doc.addEventListener("change", lvl2BoxHandler);
lvl3Doc.addEventListener("change", lvl3BoxHandler);
lvl4Doc.addEventListener("change", lvl4BoxHandler);
lvl5Doc.addEventListener("change", lvl5BoxHandler);
lvl6Doc.addEventListener("change", lvl6BoxHandler);
lvl7Doc.addEventListener("change", lvl7BoxHandler);
lvl8Doc.addEventListener("change", lvl8BoxHandler);
lvl9Doc.addEventListener("change", lvl9BoxHandler);

// allClassesDoc.addEventListener("change", allClassesBoxHandler);
artificerDoc.addEventListener("change", artificerBoxHandler);
bardDoc.addEventListener("change", bardBoxHandler);
clericDoc.addEventListener("change", clericBoxHandler);
druidDoc.addEventListener("change", druidBoxHandler);
paladinDoc.addEventListener("change", paladinBoxHandler);
rangerDoc.addEventListener("change", rangerBoxHandler);
sorcererDoc.addEventListener("change", sorcererBoxHandler);
warlockDoc.addEventListener("change", warlockBoxHandler);
wizardDoc.addEventListener("change", wizardBoxHandler);

//this will be the spell list holding array
let allSpells = [
        //cantrips
        [
            {
                name: "Acid Splash",
                type: "Conjuration cantrip",
                castingTime: "1 action",
                range: "60 feet",
                components: "V, S",
                duration: "Instantaneous",
                description: "You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
                upCast: `At Higher Levels. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).`,
                classLists:["Artificer", "Sorcerer", "Wizard"],
                ritual: false,
                ua: false
            },
            {
                name: "Blade Ward",
                type: "Abjuration cantrip",
                castingTime: "1 action",
                range: "Self",
                components: "V, S",
                duration:" 1 round",
                description: "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
                classLists: ["Bard", "Sorcerer", "Warlock", "Wizard"],
                ritual: false,
                ua: false

            },
            {
                name: "Booming Blade",
                type: "Evocation cantrip",
                castingTime: "1 action",
                range: "Self (5-foot radius)",
                components: "S, M (a melee weapon worth at least 1 sp)",
                duration: "1 round",
                description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
                upCast: "At Higher Levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
                classLists: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
                ritual: false,
                ua: false

            },
            {
                name: "Control Flames",
                type:"Transmutation cantrip",
                castingTime: "1 action",
                range: "60 feet",
                components: "S",
                duration: "Instantaneous or 1 hour",
                description: "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:" +
                "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location." +
                "You instantaneously extinguish the flames within the cube." +
                "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour." +
                "You cause simple shapes—such as the vague form of a creature, an inanimate object, or a location—to appear within the flames and animate as you like. The shapes last for 1 hour." +
                "If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
                upCast:"",
                classLists: ["Druid", "Sorcerer", "Wizard"],
                ritual: false,
                ua: false

            },
            {
                name:"Chill Touch",
                type: "Necromancy cantrip",
                castingTime: "1 action",
                range: "120 feet",
                components: "V, S",
                duration: "1 round",
                description: "You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can't regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. ",
                upCast: "At Higher Levels. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
                classLists: ["Sorcerer", "Warlock", "Wizard"],
                ua: false,
                ritual: false
            },
            {
                name:"Booming Blade",
                type: "Evocation cantrip",
                castingTime: "1 action",
                range: "Self (5-foot radius)",
                components: "S, M (a melee weapon worth at least 1 sp)",
                duration: "1 round",
                description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
                upCast: "At Higher Levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8)." ,
                classLists: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
                ua: false,
                ritual: false
            }
    ]
]



console.log(allSpells[0]);


function spellButtonHandler(event){
    event.preventDefault();
    let ritual = ritualDoc.value;
    let unearthedArcana = unearthedArcanaDoc.value;
    let spellList = [];

    // let spellLevels = [];
    // for(spell of spellLevelsBase){
    //     spellLevels.push(spell);
    // }
    // let tracker = false;
    // for(spell of spellLevels){
    //     if(spell){
    //         tracker = true;
    //     }
    // }
    // if(!tracker){
    //     for(spell in spellLevels){
    //         spellLevels[spell] = true;
    //     }
    // }


    //tracer is holding spell level
    let tracer = 0;

    let anyClass = false;
    //check if there are any selected classes
        //this would be cleaner if I made a class list, but I think this is the only point it would come up
    if(artificerBox == false){
        if(bardBox == false){
            if(clericBox == false){
                if(druidBox == false){
                    if(rangerBox == false){
                        if(sorcererBox == false){
                            if(warlockBox == false){
                                if(wizardBox == false){
                                    if(paladinBox == false){
                                        anyClass = true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //if any class, don't bother with checking for class
        //break into all classes and specific class
    if(anyClass){
        for(level of spellLevels){
            if(level){
                if(ritual == "onlyRit"){
                    if(unearthedArcana == "onlyUA"){
                        for(spell of allSpells[tracer]){
                            //find rituals with ua
                            if(spell.ritual && spell.ua){
                                spellList.push(spell);
                            }
                        }
                    }
                    else if(unearthedArcana == "yes"){
                        for(spell of allSpells[tracer]){
                            //find all ritual spells
                            if(spell.ritual){
                                spellList.push(spell);
                            }
                        }
                    }
                    else{
                        for(spell of allSpells[tracer]){
                            //find rituals without us
                            if(spell.ritual && !(spell.ua)){
                                spellList.push(spell);
                            }
                        }
                    }
                }
                else if(ritual == "yes"){
                    //find all spells of either ua or normal
                        //doesn't need to be ritual
                    if(unearthedArcana == "onlyUA"){
                        for(spell of allSpells[tracer]){
                            //find all ua
                            if(spell.ua){
                                spellList.push(spell);
                            }
                        }
                    }
                    else if(unearthedArcana == "yes"){
                        for(spell of allSpells[tracer]){
                            //find all spells
                            spellList.push(spell);
                        }
                    }
                    else{
                        for(spell of allSpells[tracer]){
                            //find spells without ua
                            if(!(spell.ua)){
                                spellList.push(spell);
                            }
                        }
                    }
                }
            }
            tracer++;
        }
    }
    else{
        //I expect the biggest filters to be ritual and ua, so do those first
            //check classes last
        for(level of spellLevels){
            if(level){
                if(ritual == "onlyRit"){
                    if(unearthedArcana == "onlyUA"){
                        for(spell of allSpells[tracer]){
                            //find rituals with ua
                            if(spell.ritual && spell.ua){
                                console.log(spell);
                                let match = false;
                                if(artificerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Artificer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(bardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Bard"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(clericBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Cleric"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(druidBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Druid"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(paladinBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Paladin"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(rangerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Ranger"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(sorcererBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Sorcerer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(warlockBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Warlock"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(wizardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Wizard"){
                                            match = true;
                                        }
                                    }
                                }

                                if(match){
                                    spellList.push(spell);
                                }
                            }
                        }
                    }
                    else if(unearthedArcana == "yes"){
                        for(spell of allSpells[tracer]){
                            //find all ritual spells
                            if(spell.ritual){
                                let match = false;
                                if(artificerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Artificer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(bardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Bard"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(clericBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Cleric"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(druidBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Druid"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(paladinBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Paladin"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(rangerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Ranger"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(sorcererBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Sorcerer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(warlockBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Warlock"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(wizardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Wizard"){
                                            match = true;
                                        }
                                    }
                                }

                                if(match){
                                    spellList.push(spell);
                                }
                            }
                        }
                    }
                    else{
                        for(spell of allSpells[tracer]){
                            //find rituals without us
                            if(spell.ritual && !(spell.ua)){
                                let match = false;
                                if(artificerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Artificer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(bardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Bard"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(clericBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Cleric"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(druidBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Druid"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(paladinBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Paladin"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(rangerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Ranger"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(sorcererBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Sorcerer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(warlockBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Warlock"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(wizardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Wizard"){
                                            match = true;
                                        }
                                    }
                                }

                                if(match){
                                    spellList.push(spell);
                                }
                            }
                        }
                    }
                }
                else if(ritual == "yes"){
                    //find all spells of either ua or normal
                        //doesn't need to be ritual
                    if(unearthedArcana == "onlyUA"){
                        for(spell of allSpells[tracer]){
                            //find all ua
                            if(spell.ua){
                                let match = false;
                                if(artificerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Artificer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(bardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Bard"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(clericBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Cleric"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(druidBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Druid"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(paladinBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Paladin"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(rangerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Ranger"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(sorcererBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Sorcerer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(warlockBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Warlock"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(wizardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Wizard"){
                                            match = true;
                                        }
                                    }
                                }

                                if(match){
                                    spellList.push(spell);
                                }
                            }
                        }
                    }
                    else if(unearthedArcana == "yes"){
                        for(spell of allSpells[tracer]){
                            //find all spells
                            let match = false;
                            if(artificerBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Artificer"){
                                        match = true;
                                    }
                                }
                            }
                            else if(bardBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Bard"){
                                        match = true;
                                    }
                                }
                            }
                            else if(clericBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Cleric"){
                                        match = true;
                                    }
                                }
                            }
                            else if(druidBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Druid"){
                                        match = true;
                                    }
                                }
                            }
                            else if(paladinBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Paladin"){
                                        match = true;
                                    }
                                }
                            }
                            else if(rangerBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Ranger"){
                                        match = true;
                                    }
                                }
                            }
                            else if(sorcererBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Sorcerer"){
                                        match = true;
                                    }
                                }
                            }
                            else if(warlockBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Warlock"){
                                        match = true;
                                    }
                                }
                            }
                            else if(wizardBox == true){
                                //class may have js/html problems as a variable name
                                for(dndClass of spell.classLists){
                                    if(dndClass == "Wizard"){
                                        match = true;
                                    }
                                }
                            }

                            if(match){
                                spellList.push(spell);
                            }
                        }
                    }
                    else{
                        for(spell of allSpells[tracer]){
                            //find spells without ua
                            if(!(spell.ua)){
                                let match = false;
                                if(artificerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Artificer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(bardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Bard"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(clericBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Cleric"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(druidBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Druid"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(paladinBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Paladin"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(rangerBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Ranger"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(sorcererBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Sorcerer"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(warlockBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Warlock"){
                                            match = true;
                                        }
                                    }
                                }
                                else if(wizardBox == true){
                                    //class may have js/html problems as a variable name
                                    for(dndClass of spell.classLists){
                                        if(dndClass == "Wizard"){
                                            match = true;
                                        }
                                    }
                                }

                                if(match){
                                    spellList.push(spell);
                                }
                            }
                        }
                    }
                }
            }
            tracer++;
        }
    }

    //take the length and get a random number
        //floor it to get an index
    // if(spellList.length == 0){
    //     console.log("check");
    // }
    let randomizer = Math.random()*spellList.length;
    randomizer = Math.floor(randomizer);
    let finalSpell = spellList[randomizer];
    //take the final spell and fit it to a display template
    //spellHolder is the variable that is the holder div
    // let newTitle = document.createAttribute("h1");
    // let titleNode = document.createTextNode(text);
    // newTitle.appendChild(titleNode);
    // newTitle.textContent="Testing";
    // spellHolder.appendChild(titleNode);

    // for(child of spellHolder.children){
    //     console.log(child);
    //     spellHolder.remove(child);
    // }

    // let newTitle = document.createTextNode(finalSpell.name);
    let newTitleHolder = document.createElement("H1");
    let newTitle = document.createTextNode(finalSpell.name);
    newTitleHolder.appendChild(newTitle);
    spellHolder.appendChild(newTitleHolder);

    let spellTypeHolder = document.createElement("p");
    let spellType = document.createTextNode(finalSpell.type);
    spellTypeHolder.appendChild(spellType);
    spellHolder.appendChild(spellTypeHolder);

    let castingHolder = document.createElement("p");
    let casting = document.createTextNode("Casting time: " + finalSpell.castingTime);
    castingHolder.appendChild(casting);
    spellHolder.appendChild(castingHolder);

    let rangeHolder = document.createElement("p");
    let range = document.createTextNode("Range: " + finalSpell.range);
    rangeHolder.appendChild(range);
    spellHolder.appendChild(rangeHolder);

    let componentsHolder = document.createElement("p");
    let components = document.createTextNode("Components: " + finalSpell.components);
    componentsHolder.appendChild(components);
    spellHolder.appendChild(componentsHolder);

    let durationHolder = document.createElement("p");
    let duration = document.createTextNode("Duration: " + finalSpell.duration);
    durationHolder.appendChild(duration);
    spellHolder.appendChild(durationHolder);

    let descriptionHolder = document.createElement("p");
    let description = document.createTextNode(finalSpell.description);
    descriptionHolder.appendChild(description);
    spellHolder.appendChild(descriptionHolder);

    let upCastHolder = document.createElement("p");
    let upCast = document.createTextNode(finalSpell.upCast);
    upCastHolder.appendChild(upCast);
    spellHolder.appendChild(upCastHolder);

    let classListsHolder = document.createElement("p");
    let classLists = document.createTextNode("Included in: " + finalSpell.classLists);
    classListsHolder.appendChild(classLists);
    spellHolder.appendChild(classListsHolder);
}

spellButton.addEventListener("click", spellButtonHandler);
