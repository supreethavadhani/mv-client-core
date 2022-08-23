export enum defaultField {
    name  = '',
	label = '',
	valueType = 0,
}

export interface valuesDictionary {
    [Key: string]: string | number | boolean;
}
export interface rowsDictionary {
    [Key: string]: string | valuesDictionary;
}