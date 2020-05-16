import React ,{Component} from 'react'
import firebase from '../config/fireauth'
import { Button, Form, Grid, Header, Segment,Icon ,Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            file:'',
            url:'',
            user:{
                displayName:'',
                email:'',
            },
            isLoaded:false 
        }
        this.getProfile = this.getProfile.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.logout = this.logout.bind(this)
    }     
 
    async componentDidMount(){
        await this.getProfile();
         if(this.props.location.state && this.props.location.state.images){ 
            this.props.location.state.images.sort((a,b)=>(a.liked<b.liked)?1:-1)
            this.props.location.state.images.map((item)=>this.state.likedList.push(item))
            this.setState({ state: this.state });
        }
    }

    handleNameChange(event){
        event.preventDefault();
      //  console.log(this.state)
        this.setState({user:{displayName:event.target.value,email:this.state.user.email,photoURL:this.state.user.photoURL,uid:this.state.user.uid} });
      }
      handleEmailChange(event){
        this.setState({user:{displayName:this.state.user.displayName,email:event.target.value,photoURL:this.state.user.photoURL,uid:this.state.user.uid}});
        event.preventDefault();
      }
    logout(){
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
     async getProfile(){
        const user = await firebase.auth().currentUser;
        if (user != null) {
            this.setState({user:{displayName:user.displayName,email:user.email,photoURL:user.photoURL,uid:user.uid} })
            this.setState({isLoaded:true})         
        }
        else{
            this.props.history.push('/Logout')
        }
    }
    async deleteUser(){
        const user = await firebase.auth().currentUser;
        user.delete().then(function() {
            alert("User accout deleted")
        }).catch(function(error) {
        // An error happened.
        });
    }
     updateProfile(e){
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
        const { activeItem } = this.state
         if(this.state.isLoaded===true && this.state.user!==null && this.state.user!== undefined){
            return (
                    <div className="ui container">
                        <Menu secondary>
                            <Menu.Item
                            name='Delete User'
                            active={activeItem === 'Delete User'}
                            onClick={this.deleteUser}
                            >
                             <Icon className="user delete" size='large' />
                            Delete User
                            </Menu.Item>

                            <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.logout}
                            >
                            Logout
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <div className ="breadcrumb">
                                    <Icon className="user" size='large'>
                                        {this.state.user.displayName}   
                                    </Icon>  
                                </div>
                            </Menu.Menu> 
                        </Menu>
                         <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                User Profile
                            </Header>
                            <Form size='large'>
                            <h5 hidden>UID :{(this.state.user.uid)?this.state.user.uid:'0'}</h5>

                                <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="email" value={this.state.user.email} name="email" id="email" onChange = {this.handleEmailChange}  
                                />
                                 <Form.Input fluid icon='user' iconPosition='left' placeholder='Names' type="text" value={this.state.user.displayName}   name="displayName"
                                    id="Name" onChange = {this.handleNameChange} />
                                    <Button color='teal' fluid size='large' onClick={this.updateProfile}>
                                    Update Name
                                </Button>
                                </Segment>
                            </Form>        
                            </Grid.Column>
                        </Grid>                        
                    </div>
            )
        }
        else{
            return (
                <div className="main">
                
                 </div>
            )            
        }
    }
 
}

export default Profile;