import React, {Component} from 'react';
import { Jumbotron } from 'reactstrap';

export class About extends Component {
  render() {
    return (
    <div id="cssAboutProject" >
      <div className="parallax-content">
        <h4>O projektu</h4>
        <p id="cssAboutText">Jsme tým lidí, kterým zdraví není lhostejné. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer pellentesque quam vel velit. Praesent vitae arcu tempor neque lacinia pretium. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Aliquam in lorem sit amet leo accumsan lacinia. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nunc tincidunt ante vitae massa. Nam quis nulla. Phasellus et lorem id felis nonummy placerat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam sit amet magna in magna gravida vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

          <a id="cssFooterArrow" href="#stories" ><i class="material-icons" style={{position: 'absolute' , right: '5%'}}>expand_more</i></a>
      </div>
    </div>
  );
}
};