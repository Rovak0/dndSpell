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
            name: "Dancing Lights",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "120 feet",
            components: "V, S, M (a bit of phosphorus or wychwood, or a glowworm)",
            duration: "Concentration, up to 1 minute",
            description: "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range.",
            classLists: ["Artificer", "Bard", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Druidcraft",
            type: "Transmutation  cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "Whispering to the spirits of nature, you create one of the following effects within range: ${/n} You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round. ${/n}You instantly make a flower blossom, a seed pod open, or a leaf bud bloom. ${/n}You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube. ${/n}You instantly light or snuff out a candle, a torch, or a small campfire.",
            classLists: ["Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Eldritch Blast",
            type: "Evocation  cantrip",
            castingTime: "1 action",
            range: "120 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
            classLists: ["Warlock"],
            upCast: "The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.",
            ua: false,
            ritual: false
        },
        {
            name: "Encode Thoughts",
            type: "Enchantment cantrip",
            castingTime: "1 action",
            range: "Self",
            components: "S",
            duration: "8 hours",
            description: "You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary. If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as detect thoughts or modify memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand. Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting detect thoughts on the strand has the same effect.)",
            classLists: ["Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Friends",
            type: "Enchantment cantrip",
            castingTime: "1 action",
            range: "Self",
            components: "S, M (a small amount of makeup applied to the face as this spell is cast)",
            duration: "Concentration, up to 1 minute",
            description: "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it.",
            classLists: ["Bard", "Sorcerer","Wizard", "Warlock"],
            ua: false,
            ritual: false
        },
        {
            name: "Fire Bolt",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "120 feet",
            components: "S",
            duration: "Instantaneous",
            description: "You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.",
            classLists: ["Artificer", "Sorcerer","Wizard"],
            upCast: "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
            ua: false,
            ritual: false
        },
        {
            name: "Frostbite",
            type: "Evocation  cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 1d6 cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
            upCast: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Artificer", "Sorcerer","Wizard", "Druid", "Warlock"],
            ua: false,
            ritual: false
        },
        {
            name: "Green-Flame Blade",
            type: "Evocation  cantrip",
            castingTime: "1 action",
            range: "Self (5-foot radius)",
            components: "S, M (a melee weapon worth at least 1 sp)",
            duration: "Instantaneous",
            description: "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
            upCast: "At 5th level, the melee attack deals an extra 1d8 fire damage to the target on a hit, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level (2d8 and 2d8) and 17th level (3d8 and 3d8).",
            classLists: ["Artificer", "Sorcerer","Wizard", "Warlock"],
            ua: false,
            ritual: false
        },
        {
            name: "Guidance",
            type: "Divination  cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "Concentration, up to 1 minute",
            description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
            classLists: ["Artificer", "Cleric", "Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Guidance",
            type: "Divination  cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "Concentration, up to 1 minute",
            description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
            classLists: ["Artificer", "Cleric", "Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Gust",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You seize the air and compel it to create one of the following effects at a point you can see within range: ${/n} One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you. ${/n} You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.${/n} You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze.",
            classLists: ["Sorcerer", "Druid", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Hand of Radiance (UA)",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "5 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You raise your hand, and burning radiance erupts from it. Each creature of your choice that you can see within 5 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage.",
            upCast: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Cleric"],
            ua: true,
            ritual: false
        },
        {
            name: "Infestation",
            type: "Conjuration cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S, M (a living flea)",
            duration: "Instantaneous",
            description: "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes 1d6 poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a d4 for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move.",
            upCast: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Druid", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Light",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, M (a firefly or phosphorescent moss)",
            duration: "1 hour",
            description: "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. ${/n} If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
            classLists: ["Artificer", "Bard", "Cleric", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Lightning Lure",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "Self (15-foot radius)",
            components: "V",
            duration: "Instantaneous",
            description: "You create a lash of lightning energy that strikes at one creature of your choice that you can see within 15 feet of you. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you.",
            upCast: "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)",
            classLists: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Mage Hand",
            type: "Conjuration cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "1 minute",
            description: "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again. ${/n} You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. ${/n}The hand can't attack, activate magical items, or carry more than 10 pounds.",
            classLists: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Magic Stone",
            type: "Transmutation cantrip",
            castingTime: "1 bonus action",
            range: "Touch",
            components: "V, S",
            duration: "1 minute",
            description: "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, it has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to 1d6 + your spellcasting ability modifier. Hit or miss, the spell then ends on the stone. ${/n}If you cast this spell again, the spell ends early on any pebbles still affected by it.",
            classLists: ["Artificer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Mending",
            type: "Transmutation cantrip",
            castingTime: "1 minute",
            range: "Touch",
            components: "V, S, M (two lodestones)",
            duration: "Instantaneous",
            description: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. ${/n}This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.",
            classLists: ["Artificer", "Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Message",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "120 feet",
            components: "V, S, M (a short piece of copper wire)",
            duration: "1 round",
            description: "You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. ${/n} You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.",
            classLists: ["Artificer", "Bard", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Mind Sliver",
            type: "Enchantment cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V",
            duration: "1 round",
            description: "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn.",
            upCast: "This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Minor Illusion",
            type: "Illusion cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "S, M (a bit of fleece)",
            duration: "1 minute",
            description: "You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again. ${/n}If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.  ${/n}If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.  ${/n}If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.",
            classLists: ["Bard", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Mold Earth",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "S",
            duration: "Instantaneous or 1 hour",
            description: "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:  ${/n} If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't have enough force to cause damage.  ${/n}You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.  ${/n}If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour.  ${/n}If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
            classLists: ["Druid", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "On/Off (UA)",
            type: "Transmutation cantrip (technomagic)",
            castingTime: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "This cantrip allows you to activate or deactivate any electronic device within range, as long as the device has a clearly defined on or off function that can be easily accessed from the outside of the device. Any device that requires a software-based shutdown sequence to activate or deactivate cannot be affected by On/Off.",
            classLists: ["Sorcerer", "Warlock", "Wizard"],
            ua: true,
            ritual: false
        },
        {
            name: "Poison Spray",
            type: "Conjuration cantrip",
            castingTime: "1 action",
            range: "10 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.",
            upCast: "This spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).",
            classLists: ["Artificer",  "Druid", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Prestidigitation",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "10 feet",
            components: "V, S",
            duration: "Up to 1 hour",
            description: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:  ${/n}You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.  ${/n}You instantaneously light or snuff out a candle, a torch, or a small campfire.  ${/n}You instantaneously clean or soil an object no larger than 1 cubic foot.  ${/n}You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.  ${/n}You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.  ${/n}You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.  ${/n}If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
            classLists: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Primal Savagery",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "Self",
            components: "S",
            duration: "Instantaneous",
            description: "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes 1d10 acid damage. After you make the attack, your teeth or fingernails return to normal.",
            upCast: "The spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
            classLists: ["Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Produce Flame",
            type: "Conjuration cantrip",
            castingTime: "1 action",
            range: "Self",
            components: "V, S",
            duration: "10 minutes",
            description: "A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.  ${/n} You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage",
            upCast: "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
            classLists: ["Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Ray of Frost",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.",
            upCast: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
            classLists: ["Artificer", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Resistance",
            type: "Abjuration cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S, M (a miniature cloak)",
            duration: "Concentration, up to 1 minute",
            description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends.",
            classLists: ["Artificer", "Cleric", "Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Sacred Flame",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.",
            upCast: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
            classLists: ["Cleric"],
            ua: false,
            ritual: false
        },
        {
            name: "Sapping Sting",
            type: "Necromancy cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You sap the vitality of one creature you can see in range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage and fall prone.",
            upCast: "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)",
            classLists: ["Wizard", "(Dunamancy)"],
            ua: false,
            ritual: false
        },
        {
            name: "Shape Water",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "S",
            duration: "Instantaneous or 1 hour",
            description: "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways:  ${/n}You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.  ${/n}You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.  ${/n}You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.  ${/n}You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour.  ${/n}If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.",
            classLists: [ "Druid", "Sorcerer","Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Shillelagh",
            type: "Transmutation cantrip",
            castingTime: "1 bonus action",
            range: "Touch",
            components: "V, S, M (mistletoe, a shamrock leaf, and a club or quarterstaff)",
            duration: "1 minute",
            description: "The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn't already. The spell ends if you cast it again or if you let go of the weapon.",
            classLists: ["Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Shocking Grasp",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "Instantaneous",
            description: "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.",
            upCast: "The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)",
            classLists: ["Artificer", "Sorcerer", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Spare the Dying",
            type: "Necromancy cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "Instantaneous",
            description: "You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.",
            classLists: ["Artificer", "Cleric"],
            ua: false,
            ritual: false
        },
        {
            name: "Sword Burst",
            type: "Conjuration cantrip",
            castingTime: "1 action",
            range: "Self (5-foot radius)",
            components: "V",
            duration: "Instantaneous",
            description: "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage.",
            upCast: "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Thaumaturgy",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V",
            duration: "Up to 1 minute",
            description: "You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:  ${/n}Your voice booms up to three times as loud as normal for 1 minute.  ${/n}You cause flames to flicker, brighten, dim, or change color for 1 minute.  ${/n}You cause harmless tremors in the ground for 1 minute.  ${/n}You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.  ${/n}You instantaneously cause an unlocked door or window to fly open or slam shut.  ${/n}You alter the appearance of your eyes for 1 minute.  ${/n}If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.",
            classLists: ["Cleric"],
            ua: false,
            ritual: false
        },
        {
            name: "Thorn Whip",
            type: "Transmutation cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "V, S, M (the stem of a plant with thorns)",
            duration: "Instantaneous",
            description: "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.",
            upCast: "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Artificer", "Druid"],
            ua: false,
            ritual: false
        },
        {
            name: "Thunderclap",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "Self (5-foot radius)",
            components: "S",
            duration: "Instantaneous",
            description: "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage.",
            upCast: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)",
            classLists: ["Artificer", "Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Toll the Dead",
            type: "Necromancy cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V, S",
            duration: "Instantaneous",
            description: "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take 1d8 necrotic damage. If the target is missing any of its hit points, it instead takes 1d12 necrotic damage.",
            upCast: "The spell's damage increases by one die when you reach 5th level (2d8 or 2d12), 11th level (3d8 or 3d12), and 17th level (4d8 or 4d12).",
            classLists: ["Cleric", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "True Strike",
            type: "Divination cantrip",
            castingTime: "1 action",
            range: "30 feet",
            components: "S",
            duration: "Concentration, up to 1 round",
            description: "You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn't ended.",
            classLists: ["Bard", "Sorcerer", "Warlock", "Wizard"],
            ua: false,
            ritual: false
        },
        {
            name: "Vicious Mockery",
            type: "Enchantment cantrip",
            castingTime: "1 action",
            range: "60 feet",
            components: "V",
            duration: "Instantaneous",
            description: "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.",
            upCast: "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
            classLists: ["Bard"],
            ua: false,
            ritual: false
        },
        {
            name: "Virtue (UA)",
            type: "Abjuration cantrip",
            castingTime: "1 action",
            range: "Touch",
            components: "V, S",
            duration: "1 round",
            description: "You touch one creature, imbuing it with vitality. If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends.",
            classLists: ["Cleric"],
            ua: true,
            ritual: false
        },
        {
            name: "Word of Radiance",
            type: "Evocation cantrip",
            castingTime: "1 action",
            range: "5 feet",
            components: "V, M (a holy symbol)",
            duration: "Instantaneous",
            description: "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take 1d6 radiant damage.",
            upCast: "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
            classLists: ["Cleric"],
            ua: false,
            ritual: false
        }
    ]
]




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

    //check if any selected spell levels
    let everySpell = true;
    for(spell of spellLevels){
        if(spell == true){
            everySpell = false;
        }
    }

    //if any class, don't bother with checking for class
        //break into all classes and specific class
    
    if(everySpell){
        if(anyClass){
            for(level of spellLevels){
                //doesn't matter if the spell level is checked here
                // if(level){
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
                
                tracer++;
            }
        }
        else{
            //I expect the biggest filters to be ritual and ua, so do those first
                //check classes last
            for(level of spellLevels){
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
                
                tracer++;
            }
        }
    }
    else{
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

    if(finalSpell.upCast){
        let upCastHolder = document.createElement("p");
        let upCast = document.createTextNode(finalSpell.upCast);
        upCastHolder.appendChild(upCast);
        spellHolder.appendChild(upCastHolder);
    }

    let classListString = "";
    let iter = 0;
    for(classList of finalSpell.classLists){
        if(iter == 0){
            classListString = classListString.concat("", classList);
        }
        else{
            classListString = classListString.concat(", ", classList);
        }
        iter++;
    }
    let classListsHolder = document.createElement("p");
    let classLists = document.createTextNode("Included in: " + classListString);
    classListsHolder.appendChild(classLists);
    spellHolder.appendChild(classListsHolder);
}

spellButton.addEventListener("click", spellButtonHandler);
