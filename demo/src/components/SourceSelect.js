import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

function SourceSelect({ sources, value, handleChange, disabled }) {

  const sourceOptions = Object.entries(sources)
  // eslint-disable-next-line no-unused-vars
  .filter(([key, info]) =>
    // only use isPublic on the deployment
    // eslint-disable-next-line no-restricted-globals
    location.host === 'viv.vitessce.io' ? info.isPublic : true
  )
  .map(([key, info]) => ({ name: key, description: info.description }));

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="data-source-select">Data Source</InputLabel>
      <Select
        native
        onChange={e => handleChange(e.target.value)}
        value={value}
        inputProps={{
          name: 'data-source',
          id: 'data-source-select'
        }}
        disabled={disabled}
      >
        {sourceOptions.map(({ name, description }) => {
          return (
            <option key={name} value={name}>
              {description}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SourceSelect;
