
export type SetInput = {
  item: string;
  item_key: string;
};





// export type InputTypes= "number" | "search" | "button" | "time" | "image" |
// "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" |
// "hidden" | "month" | "password" | "radio" | "range" |"select"|"fetchselect" |"textarea"



export interface FormFields {
  field_name: string;
  editing?: boolean
  required?: boolean;
  default_value?: string | number;
}
export interface TextFields{
  type:React.HTMLInputTypeAttribute

}


export interface FormOptions {
  field_name: string;
  editing?: boolean
  required?: boolean;
  default_value?: string | number;
}

export interface FilterParams {
  data: any[]; keyword: string
}

export interface QueryFnProps {
  keyword: string
  key: string[]
}



