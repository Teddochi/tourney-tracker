interface SportInterface {
  name: string,
  getDates: () => Promise<string[]>;
}

export abstract class Sport implements SportInterface {
  name: string = '';
  abstract getDates(): Promise<string[]>;
}

export type SportSubclass = new () => Sport
