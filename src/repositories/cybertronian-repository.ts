import { CybertronianModel } from "../models/cybertronian-model";

const database: CybertronianModel[] = [
  {
    id: 1,
    name: "Optimus Prime",
    faction: "Autobots",
    abilities: {
      abilyt1:"Master Combatent",
      abilyt2:"Master Swordsman",
      abilyt3:"Expert Marksman",
      abilyt4:"Master Tactician",
    },
    weapons:   {
        weaponName1:  "Ion Blastaer",
        weaponName2:  "Dual Energon Swords",
        weaponName3:  "Energon Hooks",
        weaponName4:  "Energon Axes",
        weaponName5:  "Thermal Cannon",
        weaponName6:  "Missile",
      },
      images: {
        image1: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/18/Optimus_prime_age_of_extinction_by_steampunk671213_dgg0bdn-414w-2x.png/revision/latest?cb=20250414000514",
        image2: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/18/Optimus_prime_age_of_extinction_by_steampunk671213_dgg0bdn-414w-2x.png/revision/latest?cb=20250414000514",
        image3: "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/fe/Optimus_prime_dotm_png_3_by_kevingame_2_dewnn43-375w-2x.png/revision/latest?cb=20241026084433",
      }
  },
  {
    id: 2,
    name: "Bumblebee",
    faction: "Autobots",
    abilities: {
      abilyt1:"Stealth Force",
      abilyt2:"Reshaping",
    },
    weapons:   {
        weaponName1:  "Plasma Cannon",
        weaponName2:  "Machine Gun",
        weaponName3:  "Shoulder Missiles",
        weaponName4:  "Multi-Missile Launchers",
        weaponName5:  "Laser Cannon",
        weaponName6:  "Toe Gun",
      },
      images: {
        image1: "https://static.wikia.nocookie.net/michaelbaystransformers/images/a/ae/Bumblebee_2_%282014%29.png/revision/latest?cb=20241102090155",
        image2: "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/22/Bumblebee_%282014%29.png/revision/latest?cb=20241102085959",
        image3: "https://static.wikia.nocookie.net/michaelbaystransformers/images/7/75/DOTMBee.png/revision/latest/scale-to-width-down/1000?cb=20250808150554",
      }
  },
  {
    id: 3,
    name: "Ironhide",
    faction: "Autobots",
    abilities: {
      abilyt1:"Weapon Specialist",
      abilyt2:"Exceptional Durability",
      abilyt3:"Super Strength",
    },
    weapons:   {
        weaponName1:  "Radial Missile Launcher",
        weaponName2:  "Energy Cannon",
        weaponName3:  "Fission Chamber",
        weaponName4:  "Iron Shotgun",
        weaponName5:  "Heavy Iron",
        weaponName6:  "Arm Gun",
      },
      images: {
        image1: "https://static.wikia.nocookie.net/michaelbaystransformers/images/0/01/Ironhide_DOTM.png/revision/latest/scale-to-width-down/1000?cb=20250808150734",
        image2: "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/27/Ironhide_%282007%29.png/revision/latest?cb=20241103044351",
      }
  },
  {
    id: 4,
    name: "Ratchet",
    faction: "Autobots",
    abilities: {
      abilyt1:"Heavy Weaponry",
      abilyt2:"Healing",
      abilyt3:"Specialized Liquid Projection",
    },
    weapons:   {
        weaponName1:  "Healing Laser",
        weaponName2:  "Machine Guns",
        weaponName3:  "Energy Cannon",
        weaponName4:  "Circular Saw",
        weaponName5:  "Missiles",
      },
      images: {
        image1: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/1b/Ratchet_rotf.png/revision/latest/scale-to-width-down/1000?cb=20250808151443",
        image2: "https://static.wikia.nocookie.net/michaelbaystransformers/images/e/e8/Transformers_dotm_ratchet.png/revision/latest?cb=20250808151933",
        image3: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/16/D4cfd7fcf9552ea41570c72604de4bea.jpg/revision/latest?cb=20250809095043" 
      }
  },
  {
    id: 5,
    name: "Sideswipe",
    faction: "Autobots",
    abilities: {
      abilyt1:"Heavy Weaponry",
      abilyt2:"Healing",
      abilyt3:"Specialized Liquid Projection",
    },
    weapons:   {
        weaponName1:  "Healing Laser",
        weaponName2:  "Machine Guns",
        weaponName3:  "Energy Cannon",
        weaponName4:  "Circular Saw",
        weaponName5:  "Missiles",
      },
      images: {
        image1: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/1b/Ratchet_rotf.png/revision/latest/scale-to-width-down/1000?cb=20250808151443",
        image2: "https://static.wikia.nocookie.net/michaelbaystransformers/images/e/e8/Transformers_dotm_ratchet.png/revision/latest?cb=20250808151933",
        image3: "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/16/D4cfd7fcf9552ea41570c72604de4bea.jpg/revision/latest?cb=20250809095043" 
      }
  },
];

export const findAllCybertronians = async (): Promise<CybertronianModel[]> => {
  return database;
};

export const findCybertroniansById = async (
  id: number,
): Promise<CybertronianModel | undefined> => {
  return database.find((cybertronian) => cybertronian.id === id);
};
