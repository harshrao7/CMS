import React from 'react';
import './MatchedContent.css';
import data from './content.json';
import UseContentful from '../UseContentful';
import { useState,useEffect  } from 'react';
const MatchedContent = (props) => {
  const ob = props.query;
  console.log(ob);
  const a = props.path;
  console.log("a:", a);
  console.log("ob:", ob);
  console.log("data:", data);

  // const Content = data[a][ob] && data[a][ob].contentArr ? data[a][ob].contentArr : ["Definition not found" ];
  // console.log(Content);


  //api 

  const [jsob, setJsob] = useState({});
  const { jsobject } = UseContentful();
  useEffect(() => {
    jsobject().then((response) => {
      if (response && response.items && response.items[0] && response.items[0].fields && response.items[0].fields.content) {
        console.log(response.items[0].fields.content);
        setJsob(response);
      } else {
        console.error('Invalid response format:', response);
      }
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  console.log("ob", jsob);
  const obContent = jsob.items && jsob.items[0]?.fields?.content[a];

  const ContentApi = obContent?.[ob]?.contentArr ?? ["Definition not found"];
  console.log(ContentApi);
  return (
    <div className='wrapper_html_home text-white bg-gray'>
      <main className='wrapper_html_content'>
        <section className='wrapper_html_heading'>
          <h4 className='text-white html_heading'>{props.query.toUpperCase()}</h4>
        </section>

        <section className='wrapper_html_home_body'>
          <div className='content_html'>
            {
              ContentApi.map((c) => {
                return (
                  <p>
                    {c}
                  </p>
                )
              })
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default MatchedContent