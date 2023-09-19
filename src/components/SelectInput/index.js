import Select from 'react-select'
import './index.css'

const SelectInput = ({ options, ...rest }) => {
  return (
    <Select 
      className='select-currency'
      options={options}
      {...rest}
      styles={{
        control: (provided) => ({
          ...provided,
          width: '100%',
        }),
        input: (provided) => ({
          ...provided,
          width: '100%',
          height: '8vh',
        }),
      }}
    />
  )
}

export default SelectInput