
import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax';
import { Col, Row, Button, UncontrolledTooltip } from 'reactstrap';
import {connect} from 'react-redux';
import { startCreateDiagnosis } from '../../services/AdminDiagnosis/actions';

import {LogoutButton} from '../atoms/LogoutButton';
import {MultiSelect} from '../atoms/MultiSelect';
import {AdminNav} from '../organisms/AdminNav';
import {GenderPeriodicityContainer} from '../organisms/GenderPeriodicityContainer';
import {TooltipItem} from '../molecules/TooltipItem';
import {DiagNameContainer} from '../organisms/DiagNameContainer';



export class AdminBlogRaw extends Component {

  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
    this.submitDiagnosis = this.submitDiagnosis.bind(this);
    this.diagNameRequired = this.diagNameRequired.bind(this);
    this.diagDescriptionRequired = this.diagDescriptionRequired.bind(this);
    this.diagRelatedExamsRequired = this.diagRelatedExamsRequired.bind(this);

    this.state = {
      diagName:'',
      diagDescription:'',
      diagRelatedExams:[]
    }
  }

  updateData(value,type) {
    switch (type) {
      case 'diagName':
        this.setState({ ...this.state, diagName: value });
        break;

      case 'diagDescription':
        this.setState({ ...this.state, diagDescription: value });
        break;

      case 'diagRelatedExams':
        this.setState({ ...this.state, diagRelatedExams: value });
        break;

      default:
        this.setState({ ...this.state});
        break;

    }
  }

  diagNameRequired() {
    let empt = this.state.diagName;
     if (empt === "") {
         alert("Vyplňte název diagnózy!");
         return false;
      }
    return true;
  }

  diagDescriptionRequired() {
    let empt = this.state.diagDescription;
     if (empt === "") {
         alert("Vyplňte popis diagnózy!");
         return false;
      }
    return true;
  }
  diagRelatedExamsRequired() {
    let empt = this.props.selectedOption;
     if (empt.length === 0) {
         console.log(empt)
         alert("Vyplňte popis související vyšetření!");
         return false;
      }
    return true;
  }

  submitDiagnosis(){
    this.diagNameRequired();
    this.diagDescriptionRequired();
    this.diagRelatedExamsRequired();
  //  this.startCreateDiagnosis();
  }

  render() {
    return (
    <div>
      <div>
        <AdminNav/>
        <div>
          <Row style={{margin: "20px"}}>
          <Col></Col>
          <Col  xs="11"><h2 className="AdminWelcH2">Správa diagnóz</h2></Col>
            <Col>
             <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">
               <i class="material-icons" style={{color:"#28A3B7"}}>
                 help
               </i>
             </span>
             <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
               Ve správě diagnóz můžete vytvářet či upravovat diagnózy.
             </UncontrolledTooltip>
            </Col>
          </Row>
           <DiagNameContainer
            parentState = {this.state}
            callback = {this.updateData}
            />
             <Col>
                <Button color="info"
                  size="md"
                  style={{margin: "10px"}}>
                  Smazat
                </Button>
                <Button color="info"
                  size="md"
                  style={{margin: "10px"}}
                  onClick={this.submitDiagnosis}
                  >
                  Uložit
                </Button>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedOption: state.createDiagnosis.examination
});
export const AdminBlog = connect(mapStateToProps)(AdminBlogRaw);
