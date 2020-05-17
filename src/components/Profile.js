import React ,{Component} from 'react'
import firebase from '../config/fireauth'
import {Container, Form, Grid, Header, Segment,Icon ,Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
                displayName:'',
                email:'',
            },
            buttonStyle:{

            },
            isLoaded:false 
        }
        this.updateProfile = this.updateProfile.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.logout = this.logout.bind(this)
    }     
 
    async componentDidMount(){
        const user =  firebase.auth().currentUser;
        if (user != null) {
            this.setState({user:{displayName:user.displayName,email:user.email,uid:user.uid} })
            this.setState({isLoaded:true})         
        }
        else{
            this.props.history.push('/Logout')
        }
    }

    handleNameChange=(event)=>{
      //  console.log(this.state)
        this.setState({user:{displayName:event.target.value,email:this.state.user.email} });
        event.preventDefault();

    }
    
    logout=()=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
     async deleteUser(){
        const user = await firebase.auth().currentUser;
        user.delete().then(function() {
            alert("User accout deleted")
        }).catch(function(error) {
        // An error happened.
        });
    }
    componentDidUpdate(){
        console.log("component did update called");
    }
     updateProfile=(e)=>{
        e.preventDefault();
        var user = firebase.auth().currentUser;
       // console.log("inside updateProfile")
        user.updateProfile({
        displayName: this.state.user.displayName,
        }).then(function() {
            alert("profile updated")
          }).catch(function(error) {
            console.log(error)
          });
    }

    render(){
         if(this.state.isLoaded===true && this.state.user!==null && this.state.user!== undefined){
            return (
                <React.Fragment>
                    <Container>
                        <Menu vertical position="right">
                              <Menu.Menu >
                                    <Icon className="user" size='large'>
                                        {this.state.user.displayName?this.state.user.displayName:''}   
                                    </Icon>  
                                    <Menu fluid vertical tabular>
                                        <Menu.Item
                                        name='DeleteUser'
                                        onClick={this.deleteUser}
                                        />
                                        <Menu.Item
                                        name='logout'
                                        onClick={this.logout}
                                        />
                                      </Menu>
                            </Menu.Menu> 
                        </Menu>
                         <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                User Profile
                            </Header>
                            <Form size='large'>
                            <Header hidden>UID :{(this.state.user.uid)?this.state.user.uid:'0'}</Header>
                                <Segment stacked>
                                <Form.Input icon='user' disable="true" iconPosition='left' placeholder='E-mail address' type="email" value={this.state.user.email} name="email"  
                                />
                                 <Form.Input  icon='user' iconPosition='left' placeholder='Names' type="text" value={this.state.user.displayName?this.state.user.displayName:''}   name="displayName"
                                    id="Name" onChange = {this.handleNameChange} />
                                    <button className = " ui button" style={{color:'teal'  ,size:'large'}} onClick={this.updateProfile}>
                                    Update Name
                                </button>
                                </Segment>
                            </Form>        
                            </Grid.Column>
                        </Grid>                        
                    </Container>  
                </React.Fragment>
            )
        }
        else{
            return (
                <Container>
                
                 </Container>
            )            
        }
    }
 
}

export default Profile;