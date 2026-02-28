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
  {
    id: 9,
    name: "Wheelie",
    faction: "Autobots",
    abilities: ["Stealth", "Survival Skills", "Faction Change"],
    weapons: ["Slingshot"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/c/c2/Wheelie.jpg/revision/latest/scale-to-width-down/1000?cb=20240225205331",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1a3y7-97cf0825-0f94-4e66-9155-32d3c5099974.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxYTN5Ny05N2NmMDgyNS0wZjk0LTRlNjYtOTE1NS0zMmQzYzUwOTk5NzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iNV_AC3m6LykNf7OzvRr69uNH0JO2OhWsnvkbK4QSz0",
    ],
  },
  {
    id: 10,
    name: "Leadfoot",
    faction: "Autobots",
    abilities: ["Infiltration", "Speed", "Durability", "Weaponry"],
    weapons: ["Miniguns", "Rapid Fire Chainguns", "Energy Blaster"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/9/9d/Leadfoot.webp/revision/latest?cb=20240315193157",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dkqbhz0-e385d09b-d88f-49e5-9dd2-00e22f75823f.png/v1/fill/w_860,h_872/leadfoot_dotm_png__by_kevingame_2_dkqbhz0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcyIiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9ka3FiaHowLWUzODVkMDliLWQ4OGYtNDllNS05ZGQyLTAwZTIyZjc1ODIzZi5wbmciLCJ3aWR0aCI6Ijw9ODYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bzqrD_UPxBlU4GeieaM6OtSV9pBPRQezrA7vwzQSH5E",
    ],
  },
  {
    id: 11,
    name: "Roadbuster",
    faction: "Autobots",
    abilities: ["Combat Expert", "Heavy Armor", "Arsenal", "Versatile"],
    weapons: [
      "Miniguns",
      "Shoulder Rocket Launchers",
      "Chainsaw",
      "Rapid Fire Machine Guns",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/3/36/Roadbuster_PNG.png/revision/latest?cb=20141220085752",
      "https://www.nicepng.com/maxp/u2w7q8e6a9o0r5a9/",
    ],
  },
  {
    id: 12,
    name: "Mirage",
    faction: "Autobots",
    abilities: [
      "Invisibility",
      "Holographic Projection",
      "Agility",
      "Vehicle Duplication",
    ],
    weapons: ["Blades", "Grapple Hooks", "Sniper Rifle", "Assault Rifle"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/3/32/MirageDOTM.png/revision/latest?cb=20250808151005",
      "https://static.wikia.nocookie.net/transformers-el-ultimo-caballero/images/a/a6/Mirage.jpg/revision/latest?cb=20160809024254&path-prefix=es",
    ],
  },
  {
    id: 13,
    name: "Hound",
    faction: "Autobots",
    abilities: ["Skilled Gunman", "Doctor Skills", "Weapon Storage"],
    weapons: [
      "Tirple-Barreled Machine Gun",
      "Large Cannon",
      "Ion Gun",
      "2x Quad Gun",
      "Pentagon Cannon",
      "Granade",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/5/5e/Dfua8a4-7e348a0b-68c4-4bb0-b5e1-dce7486a2a60.png/revision/latest?cb=20250221174839",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/0/0b/Hound_aoe_png_by_kevingame_2_dj3rf8r.png/revision/latest/scale-to-width-down/1000?cb=20250221174931",
    ],
  },
  {
    id: 14,
    name: "Drift",
    faction: "Autobots",
    abilities: [
      "Expert Hand-to-Hand Combatant",
      "Expert Swordsman",
      "Expert Tactician",
    ],
    weapons: ["Sword", "Missiles", "Guns"],
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/djtct1z-3011188e-8b9d-467e-8c12-8d8086f8e675.png/v1/fit/w_828,h_1314/drift_aoe_png__by_kevingame_2_djtct1z-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc2MSIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGp0Y3Qxei0zMDExMTg4ZS04YjlkLTQ2N2UtOGMxMi04ZDgwODZmOGU2NzUucG5nIiwid2lkdGgiOiI8PTExMTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.RTterTQnTwWPXcUVWa3v1FZIlRW1ntgFnE5R-BVjOC4",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1ysda-fea2b8fb-3185-4581-af13-0fe24a845771.png/v1/fit/w_828,h_1544/drift_aoe_png__by_kevingame_2_dj1ysda-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM4NyIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxeXNkYS1mZWEyYjhmYi0zMTg1LTQ1ODEtYWYxMy0wZmUyNGE4NDU3NzEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WDNdt6K62yrLB44OYisRH7FMIShllW-Ig2vXHeVqGLU",
      "https://static.wikia.nocookie.net/transformers/images/3/3f/DriftAOE.png/revision/latest?cb=20211004184745&path-prefix=pt",
    ],
  },
  {
    id: 15,
    name: "Crosshairs",
    faction: "Autobots",
    abilities: ["Flying Experts", "Agility", "Skilled Marksman"],
    weapons: ["Twin Turbo Guns", "Parachutes"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/d/d0/Crosshairs_age_of_extinction_by_steampunk671213_dg5eqln-414w-2x.png/revision/latest?cb=20250414001048",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1yrca-0a5afc37-d956-41ed-baeb-f3c72458c181.png/v1/fill/w_840,h_952/crosshairs_aoe_png__by_kevingame_2_dj1yrca-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE2NCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxeXJjYS0wYTVhZmMzNy1kOTU2LTQxZWQtYmFlYi1mM2M3MjQ1OGMxODEucG5nIiwid2lkdGgiOiI8PTEwMjcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YucdJJJzwsHMAP5wIPaBMg9wz74llDWbDTYkuqp8x3o",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dexub2w-a63007c1-3003-48d3-a0dd-38519485616b.png/v1/fit/w_704,h_880/crosshairs_tlk_png_4_by_kevingame_2_dexub2w-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODgwIiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kZXh1YjJ3LWE2MzAwN2MxLTMwMDMtNDhkMy1hMGRkLTM4NTE5NDg1NjE2Yi5wbmciLCJ3aWR0aCI6Ijw9NzA0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aALpoabSEW5bu1eAUfkDaIDKo0u4RXJl6duF0wqEgcs",
    ],
  },
  {
    id: 16,
    name: "Megatron",
    faction: "Decepticons",
    abilities: [
      "Master Combatant",
      "Expert Marksman",
      "Genius-Level Intellect",
      "Master Leader",
      "Flight",
    ],
    weapons: [
      "Finger Pinchers",
      "Fusion Cannon",
      "Telescopic Fusion Cannon",
      "Shotgun",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/3/37/Megatron_%282009%29.png/revision/latest?cb=20241102070621",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/c/cf/Bayverse_Megatron_TF1_002.png/revision/latest/scale-to-width-down/1000?cb=20241222195554",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/3/39/Megatron_tlk_png_9_by_kevingame_2_df16j8f-414w-2x.png/revision/latest?cb=20250921185817",
    ],
  },
  {
    id: 17,
    name: "Starscream",
    faction: "Decepticons",
    abilities: ["Flight", "Immense Strength and Speed", "Body Part Attaching"],
    weapons: [
      "Homing Missile Launcher",
      "Machine Gun",
      "Buzzsaw",
      "Plasma Cannon",
      "Subsonic Gun",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/2e/Starscream_%282009%29.png/revision/latest/scale-to-width-down/1000?cb=20241102112306",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/e/ed/Starscream_%282007%29.png/revision/latest?cb=20241102112206",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/8/85/Starscream.jpg/revision/latest?cb=20240302015332",
    ],
  },
  {
    id: 18,
    name: "Soundwave",
    faction: "Decepticons",
    abilities: ["Flying", "Falconry", "Hacking"],
    weapons: [
      "Sonic Cannon",
      "Soundwave Blast",
      "Twin Turbo Wave Pistols",
      "Shotgun Cannon",
      "Shoulder Cannons",
    ],
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1knur-4db38227-0f4d-4a36-8d14-bb1cb1a6e950.png/v1/fill/w_862,h_927/soundwave_dotm_png_by_kevingame_2_dj1knur-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxa251ci00ZGIzODIyNy0wZjRkLTRhMzYtOGQxNC1iYjFjYjFhNmU5NTAucG5nIiwid2lkdGgiOiI8PTEyMDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WJqHunaSy9RMX_InwtlX-PzgBzcDo6NMUk2VwbLmuEY",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj1knti-4246bbfc-1b5f-4753-9fda-3201a30cde8c.png/v1/fit/w_828,h_1246/soundwave_dotm_png_by_kevingame_2_dj1knti-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyNSIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxa250aS00MjQ2YmJmYy0xYjVmLTQ3NTMtOWZkYS0zMjAxYTMwY2RlOGMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.AOGbkMffsLBfA2EVLzxmznM2Q4a51_DKj1ehC6acigY",
      "https://toppng.com/uploads/preview/soundwave-transformers-bumblebee-movie-soundwave-11569043574z0nw7noh5q.png",
    ],
  },
  {
    id: 19,
    name: "Shockwave",
    faction: "Decepticons",
    abilities: [
      "Energy Charge Manipulation",
      "Logic-Driven Tactics",
      "Shapeshifitting",
    ],
    weapons: ["Astromag Hand Cartridge Cannon", "Arm Blade", "Skubg-Shock"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/b/b2/Shockwave_dark_of_the_moon_by_steampunk671213_dfben3d-pre.png/revision/latest?cb=20250413235323",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/4/46/Shockwave_Dark_Moon.jpg/revision/latest/scale-to-width-down/1000?cb=20191231201655",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/5/55/24901bd2ebc943ec15540fb300eda63e.png/revision/latest?cb=20210515091031",
    ],
  },
  {
    id: 20,
    name: "Blackout",
    faction: "Decepticons",
    abilities: ["Destructive Arsenal", "Technology Manipulation", "Flying"],
    weapons: [
      "Rotor Blades",
      "Energy Wave Cannon",
      "Arm Mounted Machine Gun",
      "Chest Cannon",
      "Photon Explosive Rifle",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/0/0b/Blackout_with_rotor_%282007%29.png/revision/latest?cb=20241102064501",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/din09uy-8d98d090-9df3-4c01-8b43-a952fb825c60.png/v1/fill/w_907,h_882/blackout_movie_png__by_kevingame_2_din09uy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA5NCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGluMDl1eS04ZDk4ZDA5MC05ZGYzLTRjMDEtOGI0My1hOTUyZmI4MjVjNjAucG5nIiwid2lkdGgiOiI8PTExMjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4CfbTr41-IgLL8KzXhkuOv_MEy56Mg52PbyqdwTASwk",
    ],
  },
  {
    id: 21,
    name: "Devastator",
    faction: "Decepticons",
    abilities: ["Combat Abilities", "Combiner Ability"],
    weapons: [
      "Shoulder Missile Launchers",
      "Tabk Cannon",
      "Quadruple-Barrel Gatling Gun",
      "Blade Claws",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/f3/Brawl_%28Sand-Camo%29.jpg/revision/latest?cb=20200514172820",
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/d/d8/Brawl.jpg/revision/latest?cb=20240302020232",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/devns5k-b1a43d1f-1ae7-4743-9270-bd13671c215e.png/v1/fill/w_1002,h_797/brawl_png_1_by_kevingame_2_devns5k-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODE3IiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kZXZuczVrLWIxYTQzZDFmLTFhZTctNDc0My05MjcwLWJkMTM2NzFjMjE1ZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xvECGMM2fdF8GQd5BPH7IsiDIQhZahmU7fXf0TULRHo",
    ],
  },
  {
    id: 22,
    name: "Bonecrusher",
    faction: "Decepticons",
    abilities: [
      "Extreme Strength",
      "Extreme Durability",
      "Demoltion Expert",
      "Agressive Style",
    ],
    weapons: ["Claws", "Wrist Gatling Guns"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/b/b1/Bonecrusher_tf_movie_png_by_kevingame_2_diykv3a.png/revision/latest/scale-to-width-down/1000?cb=20250809100043",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/devnuzn-a4ba439d-0416-4fa4-bca0-983c67ebaf86.png/v1/fit/w_609,h_700/bonecrusher_png_4_by_kevingame_2_devnuzn-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kZXZudXpuLWE0YmE0MzlkLTA0MTYtNGZhNC1iY2EwLTk4M2M2N2ViYWY4Ni5wbmciLCJ3aWR0aCI6Ijw9NjA5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UBtwRGOJqAkBDrgUrS9Y3N4uCCmvJtVIu_c8rAUGjMA",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/801c8e3a-0356-48f3-860d-3adbd997f42d/dfoznvm-b903c884-4b88-4084-9fab-4702a13a4722.png/v1/fit/w_750,h_800/bonecrusher__2007__by_steampunk671213_dfoznvm-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU3NyIsInBhdGgiOiIvZi84MDFjOGUzYS0wMzU2LTQ4ZjMtODYwZC0zYWRiZDk5N2Y0MmQvZGZvem52bS1iOTAzYzg4NC00Yjg4LTQwODQtOWZhYi00NzAyYTEzYTQ3MjIucG5nIiwid2lkdGgiOiI8PTMzNTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ujVyDxZVzR90uJA-1LE6dDY0N2sRndyiEVRjiIFX_e8",
    ],
  },
  {
    id: 23,
    name: "Barricade",
    faction: "Decepticons",
    abilities: ["combat Gear", "High Speed Combat", "Tactical Specialist"],
    weapons: [
      "Mace",
      "Frenzy Eject",
      "Heat Scanner",
      "Laser Gun",
      "Arm Machine Gun",
      "Brass Knuckles",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/9/98/TLK_Barricade_Render.webp/revision/latest?cb=20250921182821",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/devne9q-a3a7a412-93af-46d3-9b35-a66f1951d417.png/v1/fit/w_750,h_752/barricade_png_2_by_kevingame_2_devne9q-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MyIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGV2bmU5cS1hM2E3YTQxMi05M2FmLTQ2ZDMtOWIzNS1hNjZmMTk1MWQ0MTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eky4SVDzb-scMkeP-ipagkE0BZXYK4SqtjH1UE95xm8",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dexksse-866ad634-1065-47b8-9374-aa9cb069d745.png/v1/fit/w_750,h_1064/barricade_tlk_png_3_by_kevingame_2_dexksse-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxOCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGV4a3NzZS04NjZhZDYzNC0xMDY1LTQ3YjgtOTM3NC1hYTljYjA2OWQ3NDUucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mb6MLEuT9J6dl3tCk1EM-ew5XAWAY5t3riwK-rLLMVw",
    ],
  },
  {
    id: 24,
    name: "Nitro Zeus",
    faction: "Decepticons",
    abilities: ["Tracking Intelligence", "Durability", "Adaptability"],
    weapons: [
      "Missiles",
      "Shoulder Machine Guns",
      "Curved Axe Blade",
      "Arm Cannnon",
      "Crowwbow Blaster",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/2/29/Nitro_Zeus_2.png/revision/latest?cb=20171128171336",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d66374dd-dcdd-4528-a5fd-5c726c7c21a5/dg3gcqz-9accef41-b16a-498b-acd9-56c0ce5b2c18.png/v1/fit/w_720,h_764/transformers_nitrotrap_battle_zeus_fuison_by_megaxphoenix_dg3gcqz-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY0IiwicGF0aCI6Ii9mL2Q2NjM3NGRkLWRjZGQtNDUyOC1hNWZkLTVjNzI2YzdjMjFhNS9kZzNnY3F6LTlhY2NlZjQxLWIxNmEtNDk4Yi1hY2Q5LTU2YzBjZTViMmMxOC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-dN1Ccm_r6qdEGnwRxwh4GW3a3YXEq9QRAIzATJxD9M",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dexoxn0-2450e9f5-e682-4d7e-bb51-af9f7ca5c9c7.png/v1/fit/w_750,h_656/nitro_zeus_tlk_png_3_by_kevingame_2_dexoxn0-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGV4b3huMC0yNDUwZTlmNS1lNjgyLTRkN2UtYmI1MS1hZjlmN2NhNWM5YzcucG5nIiwid2lkdGgiOiI8PTExNjYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mPPHzy7XB-TszpJf8xG7TS1kp8fIbCNjaa3c_J2i3Fc",
    ],
  },
  {
    id: 25,
    name: "Sideways",
    faction: "Decepticons",
    abilities: ["Combat Experts", "Dimensional Hopping", "Infiltration"],
    weapons: [
      "Plasma Sniper Rifle",
      "Saw Blades",
      "Chaing Guns",
      "Gravition Mines",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/5/5f/T41gu170n9fd1.png/revision/latest?cb=20250806180204",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/801c8e3a-0356-48f3-860d-3adbd997f42d/df78kod-aa7c2003-f5e0-495b-a19f-0838c099aea6.png/v1/fill/w_728,h_1097/sideways__revenge_of_the_fallen__by_steampunk671213_df78kod-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDA5NiIsInBhdGgiOiIvZi84MDFjOGUzYS0wMzU2LTQ4ZjMtODYwZC0zYWRiZDk5N2Y0MmQvZGY3OGtvZC1hYTdjMjAwMy1mNWUwLTQ5NWItYTE5Zi0wODM4YzA5OWFlYTYucG5nIiwid2lkdGgiOiI8PTI3MTkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VwRv2_Ox-Pi1C1NWAq-JYXztU_ZXYkZZSfLYmdG-TKk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj11t2t-7dde6c7b-e1a0-4b53-93e5-b21c08989797.png/v1/fit/w_750,h_704/sideways_rotf_png__by_kevingame_2_dj11t2t-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMSIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGoxMXQydC03ZGRlNmM3Yi1lMWEwLTRiNTMtOTNlNS1iMjFjMDg5ODk3OTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.E02IkqgpBRpo0bb4CIQV8iXd4aDoymS5Rer6P-lzihw",
    ],
  },
  {
    id: 26,
    name: "Dreadbot",
    faction: "Decepticons",
    abilities: [
      "Heavy Armored Chassis",
      "High Intensity",
      "Chaotic Fighting Style",
    ],
    weapons: ["Signature Weapon", "Claws"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/1/11/Dreadbot.jpg/revision/latest?cb=20210617222217",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d66374dd-dcdd-4528-a5fd-5c726c7c21a5/dgoykrj-f15def58-2574-432c-9ec4-7fa6a9dcca5d.png/v1/fit/w_720,h_954/transformers_bayverse_dreadbot_redesign__by_megaxphoenix_dgoykrj-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTU0IiwicGF0aCI6Ii9mL2Q2NjM3NGRkLWRjZGQtNDUyOC1hNWZkLTVjNzI2YzdjMjFhNS9kZ295a3JqLWYxNWRlZjU4LTI1NzQtNDMyYy05ZWM0LTdmYTZhOWRjY2E1ZC5wbmciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FzYjeg1r-yav1EKk9EnXJeblJCY1hNGvk9G9XNm3cNU",
      "https://live.staticflickr.com/926/43093911331_ef426687a5.jpg",
    ],
  },
  {
    id: 27,
    name: "Rampage",
    faction: "Decepticons",
    abilities: ["Dark Energy Based", "Immense Strength", "Adaptive"],
    weapons: ["Cybertronian Laser Blasters", "Tread Whips"],
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj173o2-af1d8fbe-f874-4f51-915f-150362934d0e.png/v1/fit/w_662,h_707/rampage_rotf_png__by_kevingame_2_dj173o2-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzA3IiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kajE3M28yLWFmMWQ4ZmJlLWY4NzQtNGY1MS05MTVmLTE1MDM2MjkzNGQwZS5wbmciLCJ3aWR0aCI6Ijw9NjYyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.k1hqVtIC2cU77TdBmdC-xd0lCQ2XppEmmahiupAEozY",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dj173pp-50bf88d6-2cf5-418c-b5ff-9ea7ef79423e.png/v1/fit/w_750,h_786/rampage_rotf_png__by_kevingame_2_dj173pp-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIyIiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kajE3M3BwLTUwYmY4OGQ2LTJjZjUtNDE4Yy1iNWZmLTllYTdlZjc5NDIzZS5wbmciLCJ3aWR0aCI6Ijw9Nzg0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.K-uYFieiMMH1EEmofx4vNSBCIjbHlU824WpCF8ptX-A",
    ],
  },
  {
    id: 28,
    name: "Mohawk",
    faction: "Decepticons",
    abilities: ["Agility", "Fast", "Chaotic"],
    weapons: ["Mohawk's Knives", "Forks"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/3/30/Mohawk_the_last_knight_by_steampunk671213_dgpapa2-414w-2x.png/revision/latest?cb=20250505202409",
      "https://static.wikia.nocookie.net/villains/images/8/8f/TransformersTheLastKnightMohawkRender.png/revision/latest?cb=20250816171100",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dfmd0w4-d9a7375c-a3ba-4dcd-89f2-7659b75eb8ab.png/v1/fit/w_620,h_1003/mohawk_tlk_png_by_kevingame_2_dfmd0w4-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMyIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGZtZDB3NC1kOWE3Mzc1Yy1hM2JhLTRkY2QtODlmMi03NjU5Yjc1ZWI4YWIucG5nIiwid2lkdGgiOiI8PTYyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nWBF1niPFPkNZDYJ5RD2Wms9FUTyM5DqwFC6maHTktA",
    ],
  },
  {
    id: 29,
    name: "Onslaught",
    faction: "Decepticons",
    abilities: [
      "High Level Strategist",
      "Long Range Artillery",
      "Combiner Leader",
      "High Durability",
    ],
    weapons: [
      "Missiles",
      "Claw Hand",
      "Radial Rocket Launcher",
      "Laser Machine-gun",
    ],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/f/f6/Bayverse_Onslaught.png/revision/latest?cb=20250508122034",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dfewn4h-a9a79bcf-3d94-48a5-911c-8e6ff30fc4d7.png/v1/fit/w_750,h_858/onslaught_tlk_png_by_kevingame_2_dfewn4h-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3MiIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGZld240aC1hOWE3OWJjZi0zZDk0LTQ4YTUtOTExYy04ZTZmZjMwZmM0ZDcucG5nIiwid2lkdGgiOiI8PTExMTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.rTVTN7-vg0bHzX_mwkvFkU1wtyMZlRKHQKXj5AOuaUk",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/dexwtb4-97265e11-1852-4381-a1c1-0b6c63ef3dea.png/v1/fit/w_750,h_846/onslaught_tlk_png_2_by_kevingame_2_dexwtb4-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI1NCIsInBhdGgiOiIvZi80ZWNmNmJiMy1lNWMyLTQ5YWEtODMwMC0zNjVkZGY3ZTgzZmEvZGV4d3RiNC05NzI2NWUxMS0xODUyLTQzODEtYTFjMS0wYjZjNjNlZjNkZWEucG5nIiwid2lkdGgiOiI8PTExMTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NMPboJhEi_idGMAzqtDW4xl1VdlNm2Fv_3EkAvM07Ds",
    ],
  },
  {
    id: 30,
    name: "Berserker",
    faction: "Decepticons",
    abilities: ["Flying Experts", "Agility", "Skilled Marksman"],
    weapons: ["Cybertronian Spears", "Chaingun", "Spiky Harpoons"],
    images: [
      "https://static.wikia.nocookie.net/michaelbaystransformers/images/b/ba/IMG_6840.JPG/revision/latest?cb=20181128162324",
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ecf6bb3-e5c2-49aa-8300-365ddf7e83fa/diqzi4x-62a27a17-b575-4dc3-a854-1d6bda77cb69.png/v1/fit/w_590,h_900/berserker_tlk_png__by_kevingame_2_diqzi4x-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6Ii9mLzRlY2Y2YmIzLWU1YzItNDlhYS04MzAwLTM2NWRkZjdlODNmYS9kaXF6aTR4LTYyYTI3YTE3LWI1NzUtNGRjMy1hODU0LTFkNmJkYTc3Y2I2OS5wbmciLCJ3aWR0aCI6Ijw9NTkwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.t14K9ItirAdu1AGoTQBTaigadOPPfegG_VHWr2ef1NE",
      "https://static.wikia.nocookie.net/transformers/images/1/1a/Berserker_png.png/revision/latest/scale-to-width-down/1000?cb=20240203171213",
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

export const insertCybertronian = async (cybertronian: CybertronianModel) => {
  database.push(cybertronian);
};

export const deleteOneCybertronian = async (id: number) => {
  const index = database.findIndex((c) => c.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyCybertronian = async (
  id: number,
  body: CybertronianModel,
): Promise<CybertronianModel> => {
  const index = database.findIndex((c) => c.id === id);

  if (index !== -1) {
    database[index] = body;
  }

  return database[index];
};
