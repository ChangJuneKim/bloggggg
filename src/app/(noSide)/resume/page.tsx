import Contacts from '@/components/mdx/Contacts';
import headings from '@/components/mdx/Headings';
import Alert from '@/components/mdx/Alert';
import { Spacer } from '@/components/base';

const Heading = headings.h1;
export default function ResumePage() {
  return (
    <>
      <Heading id={'h1'}>
        안녕하세요
        <br />
        저는 <b>김창준입니다</b>
      </Heading>
      <Alert>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, assumenda, corporis,
        dolorum enim explicabo impedit in nam nemo nostrum provident quasi quos tenetur! Accusamus
        aspernatur molestias rem repellat soluta!
      </Alert>
      <Alert title={'우우'} status={'info'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, assumenda, corporis,
        dolorum enim explicabo impedit in nam nemo nostrum provident quasi quos tenetur! Accusamus
        aspernatur molestias rem repellat soluta!
      </Alert>
      <Contacts />
      <Spacer
        size={'20'}
        axis={'horizontal'}
        background={'wordHighlight'}
        height={'1'}
        marginTop={'0'}
        marginBottom={'0'}
        marginLeft={'auto'}
        marginRight={'auto'}
      />
    </>
  );
}
