import { useHandRolledQuery } from 'src/shared/hooks/useHandRolledQuery'
import { Country, FormOptions, SetInput } from './types'

interface TheCountrySelectProps {
  setInput: (props: SetInput) => void
  form_options: FormOptions
}

export function TheCountrySelect({
  form_options,
  setInput,
}: TheCountrySelectProps) {

  const [keyword, setKeyword] = React.useState({
    word: (form_options.default_value as string) ?? '',
  })

  const { data, loading, error } = useHandRolledQuery<Country[]>({
    queryKey:["countries"],
    queryFn:getCountries,
    select: (data) => {
    if(Array.isArray(data)) {
        return data.filter((item) => item.name.common.toLocaleLowerCase().includes(keyword.word.toLocaleLowerCase()))
      }
      return data
    },

  })

  const handleChange = (e: any) => {
    const { value } = e.target
    setKeyword({ ...keyword, [e.target.id]: value })
  }

  const finishSearch = (item: Country) => {
    if (form_options.editing) {
      setKeyword({ word: item.name.common })
      setInput({ item_key: 'country', item: item.name.common })
      setInput({
        item_key: 'phone',
        item: item.idd.root + item.idd.suffixes[0],
      })
    }
  }

  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[80%] h-full flex justify-center items-center  text-error text-sm">
          {error.message}
        </div>
      </div>
    )
  }



  return (
    <div className="w-full h-full cursor-pointer flex flex-wrap items-center justify-start ">
      <div className="flex justify-center items-center">
        <label className="font-bold  text-sm capitalize  w-full flex items-start px-2">
          {form_options.required && form_options.editing ? (
            <div className="text-error mr-1">*</div>
          ) : null}
          {form_options.field_name}
        </label>
        {form_options.editing ? (
          <input
            className="input input-bordered input-sm min-w-xs max-w-fit"
            id="word"
            autoComplete="off"
            value={keyword.word}
            onChange={handleChange}
            placeholder={'search for ' + form_options.field_name}
          />
        ) : null}
      </div>
      {data && data?.length < 1 ? (
        <div
          className="w-[70%] h-full cursor-pointer flex flex-col items-center justify-center
          text-sm text-error break-inside-auto
        "
        >
          0 results found{' '}
        </div>
      ) : null}
      <div className="rounded-lg flex flex-wrap items-center justify-start ">
        {data?.slice(0, 10).map((item, idx: number) => {
          return (
            <div
              key={item.name.official + idx}
              onClick={() => finishSearch(item)}
              className="m-1 py-1 px-2 border-2 text-center min-w-fit rounded-lg hover:bg-slate-600
              ease-in duration-100 flex items-center justify-center
            "
            >
              <div> {item.name.common} </div>
              <img className="w-5 h-3 mx-1" src={item.flags.svg} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

const getCountries = async () => {
  return fetch('https://restcountries.com/v3.1/all').then((response) =>
    response.json().then((data: Country[]) => data.filter((item) => {
      // console.log("functio === ",keyword, item.name.common)
      // return item.name.common.toLowerCase().includes(keyword.toLowerCase())
        return item

    }))
  )
}
