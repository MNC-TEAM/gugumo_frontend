import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import * as S from "../../(auth)/post/style";

export default function NoSsrEditor({content,setContent} : {content? : any, setContent : any}) {

    const editorRef = useRef<Editor>(null);

    const onChange = ()=>{
        const content = editorRef.current?.getInstance().getHTML();
        setContent(content);
    }

    return (
        <S.DescInputStyle>
            <label htmlFor="content">내용</label>
            <S.Editor>
            <Editor
                toolbarItems={[
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'link'],
                ]}
                initialEditType="wysiwyg"
                hideModeSwitch={true}
                placeholder="내용을 입력해 주세요."
                initialValue={!content ? " " : content}
                ref={editorRef}
                onChange={onChange}
            />
            </S.Editor>
        </S.DescInputStyle>
    )
}
