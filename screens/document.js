import React, { Component } from "react";
import {
  
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Alert
} from "react-native"
import {
  Container,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Text,
  Icon,
  Button,
  List,
  Spinner
} from "native-base";
import PostListCard from '../containers/cardlist'
import DocList from '../components/docList'
import { HRDocs } from '../data/documents/documents'
import { getFaqs } from '../data/documents/documentsApi'


class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      faqs: null
    }
  }

  componentDidMount() {

    getFaqs().then(
      faqs => {
        this.setState({
          isLoading: false,
          faqs
        })
      },
      error => {
        Alert.alert("Error Data loading")
      }
    )

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
    }
  }

  renderDocsList(docs) {
    return (
        <List
            dataArray={docs}
            renderRow={(item, index) => (
                <PostListCard data={item} nav={this.props.navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
  }

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
        <Button 
          onPress={() => Linking.openURL("https://chhr.afdb.org/guidance-tools/")}
          full
        >
          <Icon type="MaterialCommunityIcons" name='file-pdf' />
          <Text>See more Documents</Text>
        </Button>
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
                  this.state.faqs ?
                    this.renderDocsList(this.state.faqs)
                    : <Spinner color="green" />
                  // this.renderDocs(HRDocs, 'FAQ')
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
        </Tabs>
      </Container>
    );
  }
}

export default Document
