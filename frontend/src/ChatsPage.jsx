import { PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh' }}>
        <PrettyChatWindow
            projectId='cf11c1cd-dc25-4133-8fe8-8184891d921d'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%'}} 
        />
    </div>
    ) 
}

export default ChatsPage