import React, {useState} from 'react';
import {Select} from 'antd';
import LyricsSearch from './search/Search';





function Trending() {

  const [res, setRes] = useState('');
  const [country, setCountry] = useState('US');



  async function fetchData(value){
    const url = '/api/trending/'+value+'/top'
    console.log(url)
    return fetch(url,{
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({
        country: 'US'
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(result => {
      return result.json()
    }
      )
  }
  
  // const onFinish = async (values) => {  
  //   console.log("starting ")
  //   let temp = await fetchData().then(value => {
  //     console.log(value)
  //     return value;
  //   });
  //   setRes(temp.message.body.track_list)
  
  //   console.log('resonate ', temp.message.body.track_list);
  
  //   /*
  //   *     useState is not immediately available.
  //    May have to force rerender if data is needed 
  //    in the current component. see results of first 
  //    log attempt vs following attempts
  
  //   */
  //   console.log('Success:', values, res);
  // };
  
  const onChange = async (value) => {
    console.log(`selected ${value}`);
    console.log("starting ", country)
    let temp = await fetchData(value).then(value => {
      console.log(value)
      return value;
    });
    setRes(temp.message.body.track_list)
  
    console.log('resonate ', temp.message.body.track_list);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
      <div className="Trending">
        <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'US',
        label: 'US',
      },
      {
        value: 'GB',
        label: 'GB',
      },
      {
        value: 'FR',
        label: 'FR',
      },
      {
        value: 'JP',
        label: 'JP',
      },
      {
        value: 'CA',
        label: 'CA',
      },
      
    ]}
  />

<LyricsSearch results={res}></LyricsSearch>
  
      </div>
    );
  }
  
  export default Trending;
