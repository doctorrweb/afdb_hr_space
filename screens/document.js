import React, { Component } from "react";
import {
  
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from "react-native";
import {
  Container,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Icon,
} from "native-base";
import DocList from '../components/docList'
import { HRDocs } from '../data/documents/documents'



class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "HR Documents",
      headerStyle: {
        backgroundColor: "#e9e9e9"
      },
      headerTintColor: "#02983E",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  renderDocs(docs, type) {
    const docTypeArray = docs.filter(doc => {
      if (doc.type === type) {
        return true
      }
    })
    return docTypeArray.map(doc => <DocList key={doc.title} data={doc} />)
  }

  render() {

    return (
      <Container>
        <Tabs>
          <Tab
            style={{
              paddingTop: 25
            }}
            textStyle={{ color: '#02983E' }}
            activeTextStyle={{ color: '#02983E' }}
            activeTabStyle={{
              borderBottomColor: '#02983E'
            }}
            heading={
              <TabHeading>
                <Icon name="paper" />
                <Text> FAQs</Text>
              </TabHeading>
            }
          >
            <Container>
              <Content>
                {
                  this.renderDocs(HRDocs, 'FAQ')
                }
              </Content>
            </Container>
            
          </Tab>
          <Tab
            style={{
              paddingTop: 25
            }}
            heading={
              <TabHeading>
                <Icon name="apps" />
                <Text> Guidances</Text>
              </TabHeading>
            }
          >
            {
              this.renderDocs(HRDocs, 'Guidance')
            }
          </Tab>
          <Tab
            style={{
              paddingTop: 25
            }}
            heading={
              <TabHeading>
                <Icon name="pie" />
                <Text> Reports</Text>
              </TabHeading>
            }
          >
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Document
