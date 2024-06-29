import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConversationList } from "./conversation/ConversationList";
import { ConversationCreate } from "./conversation/ConversationCreate";
import { ConversationEdit } from "./conversation/ConversationEdit";
import { ConversationShow } from "./conversation/ConversationShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { ReplyList } from "./reply/ReplyList";
import { ReplyCreate } from "./reply/ReplyCreate";
import { ReplyEdit } from "./reply/ReplyEdit";
import { ReplyShow } from "./reply/ReplyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PromptCategoryList } from "./promptCategory/PromptCategoryList";
import { PromptCategoryCreate } from "./promptCategory/PromptCategoryCreate";
import { PromptCategoryEdit } from "./promptCategory/PromptCategoryEdit";
import { PromptCategoryShow } from "./promptCategory/PromptCategoryShow";
import { PromptHistoryList } from "./promptHistory/PromptHistoryList";
import { PromptHistoryCreate } from "./promptHistory/PromptHistoryCreate";
import { PromptHistoryEdit } from "./promptHistory/PromptHistoryEdit";
import { PromptHistoryShow } from "./promptHistory/PromptHistoryShow";
import { PromptList } from "./prompt/PromptList";
import { PromptCreate } from "./prompt/PromptCreate";
import { PromptEdit } from "./prompt/PromptEdit";
import { PromptShow } from "./prompt/PromptShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OpenAIAssistantService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Conversation"
          list={ConversationList}
          edit={ConversationEdit}
          create={ConversationCreate}
          show={ConversationShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Reply"
          list={ReplyList}
          edit={ReplyEdit}
          create={ReplyCreate}
          show={ReplyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PromptCategory"
          list={PromptCategoryList}
          edit={PromptCategoryEdit}
          create={PromptCategoryCreate}
          show={PromptCategoryShow}
        />
        <Resource
          name="PromptHistory"
          list={PromptHistoryList}
          edit={PromptHistoryEdit}
          create={PromptHistoryCreate}
          show={PromptHistoryShow}
        />
        <Resource
          name="Prompt"
          list={PromptList}
          edit={PromptEdit}
          create={PromptCreate}
          show={PromptShow}
        />
      </Admin>
    </div>
  );
};

export default App;
