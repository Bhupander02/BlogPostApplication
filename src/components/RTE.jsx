import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller, useFormContext} from 'react-hook-form'



export default function RTE({name, control, label, defaultValue=""}) {
  
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            <Controller
                name={name || "content"}
                control={control}
// the thing to learn here is how to render the elements
                render= { ( {field: {onChange} } ) =>(
                    <Editor
                    initialValue={defaultValue}
                    init={{
                        inintalvalue: defaultValue,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | styleselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | link image | \
                            code',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={onChange}
                    />
                )}
                
 

            />
        
        </div>
  )
}

