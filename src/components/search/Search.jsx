import { AudioOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import { Avatar, List, Input, Space } from 'antd';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);


// function Search() {

// <div>

//   <List
//     itemLayout="horizontal"
//     dataSource={data}
//     renderItem={(item, index) => (
//       <List.Item>
//         <List.Item.Meta
//           avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
//           title={<a href="https://ant.design">{item.track.artist_name}</a>}
//           description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//         />
//       </List.Item>
//     )}
//   />

// </div>

// }

// export default Search;


// const data = [
//   {
//     title: 'Ant Design Title 1',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];

const LyricsSearch = ({results}) => (

    <>
    {/* <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    /> */}

  <List
    itemLayout="horizontal"
    dataSource={results}
    renderItem={(data, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href={data.track.track_share_url}>{data.track.artist_name + " - "+ data.track.track_name}</a>}
          description= {"Album: " + data.track.album_name }
          
        />
      </List.Item>
    )}
  />

</>
);

export default LyricsSearch;