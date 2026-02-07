export interface CybertronianModel {
  id: number;
  name: string;
  faction: string;
  abilities?: {
    abilyt1?: string,
    abilyt2?: string,
    abilyt3?: string,
    abilyt4?: string,
  };
  weapons: {
    weaponName1: string,
    weaponName2: string,
    weaponName3: string,
    weaponName4?: string,
    weaponName5?: string,
    weaponName6?: string,
  };
  images:{
    image1: string,
    image2?: string,
    image3?: string,
  }
}
