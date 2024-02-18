import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Visualizer from './components/Visualizer';
import CodeEditor from './components/CodeEditor';
import { React, useEffect, useMemo, useState } from 'react';
import FilesViewer from './components/FilesViewer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
  const [file,setFile] = useState('')
  useEffect(() => {
    const storedDark = localStorage.getItem('dark');

    // console.log('App mounted');
  }, []);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      console.log(newValue);
    };


  
	return (
		<div className='flex flex-row'>
      <div className='basis-1/4 md:basis-1/3'>
      <FilesViewer setState={setFile} />
      </div>
      <div className='basis-2/4 md:basis-2/3'>
        <Tabs value={value} sx={{backgroundColor:"#2f3235"}}onChange={handleChange}> 
        <Tab label="File Editor" {...a11yProps(0)} />
        <Tab label="Wave Viewer" {...a11yProps(1)} />
        </Tabs>
        {value == 0 ? <CodeEditor />: <Visualizer file={file}/>}
      </div>

		</div>
	);
}

export default App;
