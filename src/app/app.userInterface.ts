interface Theme {
    display: string;
    backgroundColor: string;
    fontColor: string;
}
export interface User{   
    isActive?: boolean; 
    gender?: string;
    selectedTheme?:string;
}