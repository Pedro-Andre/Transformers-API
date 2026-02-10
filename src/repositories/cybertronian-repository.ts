import { CybertronianModel } from "../models/cybertronian-model";

const database: CybertronianModel[] = [
  {
    id: 1,
    name: "Optimus Prime",
    faction: "Autobots",
    abilities: [
      "Master Combatent",
      "Master Swordsman",
      "Expert Marksman",
      "Master Tactician",
    ],
    weapons: [
      "Ion Blastaer",
      "Dual Energon Swords",
      "Energon Hooks",
      "Energon Axes",
      "Thermal Cannon",
      "Missile",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/18/Optimus_prime_age_of_extinction_by_steampunk671213_dgg0bdn-414w-2x.png/revision/latest?cb=20250414000514",
      "https://www.clipartmax.com/png/middle/234-2341277_transformers-5-autobots-optimus-prime.png",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/fe/Optimus_prime_dotm_png_3_by_kevingame_2_dewnn43-375w-2x.png/revision/latest?cb=20241026084433",
    ],
  },
  {
    id: 2,
    name: "Bumblebee",
    faction: "Autobots",
    abilities: ["Stealth Force", "Reshaping"],
    weapons: [
      "Plasma Cannon",
      "Machine Gun",
      "Shoulder Missiles",
      "Multi-Missile Launchers",
      "Laser Cannon",
      "Toe Gun",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/a/ae/Bumblebee_2_%282014%29.png/revision/latest?cb=20241102090155",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/22/Bumblebee_%282014%29.png/revision/latest?cb=20241102085959",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/7/75/DOTMBee.png/revision/latest/scale-to-width-down/1000?cb=20250808150554",
    ],
  },
  {
    id: 3,
    name: "Ironhide",
    faction: "Autobots",
    abilities: [
      "Weapon Specialist",
      "Exceptional Durability",
      "Super Strength",
    ],
    weapons: [
      "Radial Missile Launcher",
      "Energy Cannon",
      "Fission Chamber",
      "Iron Shotgun",
      "Heavy Iron",
      "Arm Gun",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/0/01/Ironhide_DOTM.png/revision/latest/scale-to-width-down/1000?cb=20250808150734",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/27/Ironhide_%282007%29.png/revision/latest?cb=20241103044351",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1krcy-772507fa-81b5-47d9-bd0b-8ae69f53e2b0.png/v1/fill/w_889,h_899/ironhide_dotm_png__by_kevingame_2_dj1krcy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIyMyIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxa3JjeS03NzI1MDdmYS04MWI1LTQ3ZDktYmQwYi04YWU2OWY1M2UyYjAucG5nIiwid2lkdGgiOiI8PTEyMDkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.h4g_mb5MliE135r1iZY0bP4eq-x6B8y_31c7ZNDRYvA",
    ],
  },
  {
    id: 4,
    name: "Ratchet",
    faction: "Autobots",
    abilities: ["Heavy Weaponry", "Healing", "Specialized Liquid Projection"],
    weapons: [
      "Healing Laser",
      "Machine Gun",
      "Energy Cannon",
      "Circular Saw",
      "Missiles",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/1b/Ratchet_rotf.png/revision/latest/scale-to-width-down/1000?cb=20250808151443",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/e/e8/Transformers_dotm_ratchet.png/revision/latest?cb=20250808151933",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/16/D4cfd7fcf9552ea41570c72604de4bea.jpg/revision/latest?cb=20250809095043",
    ],
  },
  {
    id: 5,
    name: "Sideswipe",
    faction: "Autobots",
    abilities: ["Mobility", "Combat Specialization", "Durability"],
    weapons: [
      "Cybertranium Swords",
      "Grappling Chain",
      "Double-Barried Shotguns",
      "Machine guns",
      "Double-Barreled Hand Rocket Launcher",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/5/56/Sideswipe_%282009%29.png/revision/latest/scale-to-width-down/1000?cb=20250330141301",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1k87b-cd105e08-e5e5-4a09-8d08-8aa4c7c927c8.png/v1/fill/w_878,h_911/sideswipe_dotm_png__by_kevingame_2_dj1k87b-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY2IiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kajFrODdiLWNkMTA1ZTA4LWU1ZTUtNGEwOS04ZDA4LThhYTRjN2M5MjdjOC5wbmciLCJ3aWR0aCI6Ijw9OTMxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Wwk4z7tX1uSwwgSMwzrMwlLQe3HOx-d_0LTXEDeW5is",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj17yli-80784bc2-8781-4eda-820c-4e231290c44b.png/v1/fit/w_575,h_807/sideswipe_rotf_png__by_kevingame_2_dj17yli-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA3IiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kajE3eWxpLTgwNzg0YmMyLTg3ODEtNGVkYS04MjBjLTRlMjMxMjkwYzQ0Yi5wbmciLCJ3aWR0aCI6Ijw9NTc1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5XrxePl8lN_IWO7SDshKmqXU88nyyQ1Jc8rAHhspMFs",
    ],
  },
  {
    id: 6,
    name: "Chromia",
    faction: "Autobots",
    abilities: ["Mobility", "Combat Specialization", "Durability"],
    weapons: ["Large Lasergun"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/f5/Chromia_ROTF.png/revision/latest/scale-to-width-down/1000?cb=20250527032331",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj11f5k-007a1ac6-85d9-4daf-9a5c-0f5be829cd0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxMWY1ay0wMDdhMWFjNi04NWQ5LTRkYWYtOWE1Yy0wZjViZTgyOWNkMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7yQoxqZcEw1EDq_pr29fhTowaZDjsHo8DJUAJgboqcM",
    ],
  },
  {
    id: 7,
    name: "Elita-One",
    faction: "Autobots",
    abilities: ["Mobility", "Combat Specialization", "Durability"],
    weapons: ["Blade", "Wheel Hand"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/6/63/Elita-One_ROTF.png/revision/latest/scale-to-width-down/1000?cb=20250628192415",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/6/6c/Elita-1.png/revision/latest?cb=20151108165032",
    ],
  },
  {
    id: 8,
    name: "Daytrader",
    faction: "Autobots",
    abilities: ["Mobility", "Combat Specialization", "Durability"],
    weapons: ["Large Lasergun"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/f4/Wreck-gar_1.jpg/revision/latest?cb=20240309000954",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj11f5k-007a1ac6-85d9-4daf-9a5c-0f5be829cd0c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxMWY1ay0wMDdhMWFjNi04NWQ5LTRkYWYtOWE1Yy0wZjViZTgyOWNkMGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7yQoxqZcEw1EDq_pr29fhTowaZDjsHo8DJUAJgboqcM",
    ],
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
