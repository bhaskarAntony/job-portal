import React, { useState } from 'react';

const App = () => {
  const [content, setContent] = useState([
    {
      id: 1,
      html: `<h1 className="h1" style="color:red">Hello</h1>`,
      css: {
        h1: {
          "background-color": "red"
        }
      }
    },
    {
      id:2,
      html:`
        <div style="display:flex; align-items:center; gap:20px">
          <h1>User Details</h1>
          <h4><b>Username</b></h4>
          <h4>email</h4>
          <h4>password</h4>
        </div>
      `,
      css: {
        h1: {
          "background-color": "red"
        }
      }
    }
    // Add more content objects as needed
  ]);
  const addNewObject = () => {
    const newObject = {
      id: content.length + 1,
      html: `
      <section class="hero" style="paddig;20px;background:linear-gradient(45deg, #e0434b4c, #8b228783), url(https://wallpaperaccess.com/full/955634.jpg) no-repeat center; background-size: cover; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div class="hero-text" style="text-align:center; color:white">
          <h1 style="font-size:3rem;">Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente ratione quaerat aspernatur dignissimos cumque perferendis accusantium maxime nemo exercitationem dolorum laudantium corporis dolorem dolor fuga, autem quibusdam enim facilis?</p>
          <p style="font-size:2rem;">DECEMBER/19th/2023</p>
      </div>
  </section>
     
      `,
      css: {
        h1: {
          backgroundColor: "blue"
        }
      }
    };

    setContent((prevContent) => [...prevContent, newObject]);
  };
  const applyStyles = (cssObject) => {
    let styleString = '';
    for (const [selector, styles] of Object.entries(cssObject)) {
      let styleRules = '';
      for (const [property, value] of Object.entries(styles)) {
        styleRules += `${property}: ${value}; `;
      }
      styleString += `${selector} { ${styleRules} } `;
    }
    return styleString;
  };

  const updateContent = (index, editedContent) => {
    setContent((prevContent) => {
      const updatedContent = [...prevContent];
      updatedContent[index].html = editedContent;
      return updatedContent;
    });
  };

  const applyStylesToEditable = (index) => {
    const styleString = applyStyles(content[index].css);
    const editableDiv = document.getElementById(`editableContent-${index}`);
    if (editableDiv) {
      editableDiv.style.cssText = styleString;
    }
  };

  const downloadWebsite = () => {
    const htmlContent = content.map((item) => (
      `<div>${item.html}</div>`
    )).join('\n');

    const styleString = content.map(item => applyStyles(item.css)).join('\n');
    const completeHtml = `<html><head><style>${styleString}</style></head><body>${htmlContent}</body></html>`;

    const downloadLink = document.createElement('a');
    const blob = new Blob([completeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'my_website.html';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      {content.map((item, index) => (
        <div key={index} contentEditable
          id={`editableContent-${index}`}
          onChange={applyStyles(item.css)}
          onBlur={(e) => updateContent(index, e.target.innerHTML)}
          onInput={() => applyStylesToEditable(index)}
          dangerouslySetInnerHTML={{ __html: item.html }}
          style={{ ...item.css }} // Apply styles directly
        />
      ))}
      <button onClick={downloadWebsite}>Download Website</button>
      <button onClick={addNewObject}>Download Website</button>
    </div>
  );
};

export default App;
