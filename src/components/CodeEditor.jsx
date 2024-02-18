import CodeMirror from '@uiw/react-codemirror';
import { verilog } from '@codemirror/legacy-modes/mode/verilog';
import { useEffect } from 'react';
import { basicDark } from '@uiw/codemirror-theme-basic';

import { StreamLanguage, defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language';

const CodeEditor = () => {
	const onChange = value => {
		console.log(value);
	};


	return (
		<div>
			<CodeMirror
				value={'test'}
				height='8000px'
				extensions={[StreamLanguage.define(verilog)]}
                theme={basicDark}
			
				onChange={onChange}
			/>
		</div>
	);
};

export default CodeEditor;
