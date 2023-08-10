import { useFetchRecipientUser } from "../../hooks/useFetchRecipient"

const UserChat = ({chat, user}) => {

    const {recipientUser} = useFetchRecipientUser(chat, user);

    console.log(recipientUser);

  return (
    <>UserChat</>
  )
}

export default UserChat