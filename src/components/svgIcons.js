import React from 'react';

class ContainerIconSVG extends React.Component {
  render() {
    return (
      <svg style={this.props.svgStyle}
          xmls="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
          {this.props.children}
      </svg>
    );
  }
}

// Notifications none icon

class NotificationsNoneIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M12,21.5 C13.1,21.5 14,20.6 14,19.5 L10,19.5 C10,20.6 10.9,21.5 12,21.5 L12,21.5 Z M18,15.5 L18,10.5 C18,7.43 16.37,4.86 13.5,4.18 L13.5,3.5 C13.5,2.67 12.83,2 12,2 C11.17,2 10.5,2.67 10.5,3.5 L10.5,4.18 C7.64,4.86 6,7.42 6,10.5 L6,15.5 L4,17.5 L4,18.5 L20,18.5 L20,17.5 L18,15.5 L18,15.5 Z M16,16.5 L8,16.5 L8,10.5 C8,8.02 9.51,6 12,6 C14.49,6 16,8.02 16,10.5 L16,16.5 L16,16.5 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Notifications icon

class NotificationsIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M12,21.5 C13.1,21.5 14,20.6 14,19.5 L10,19.5 C10,20.6 10.89,21.5 12,21.5 L12,21.5 Z M18,15.5 L18,10.5 C18,7.43 16.36,4.86 13.5,4.18 L13.5,3.5 C13.5,2.67 12.83,2 12,2 C11.17,2 10.5,2.67 10.5,3.5 L10.5,4.18 C7.63,4.86 6,7.42 6,10.5 L6,15.5 L4,17.5 L4,18.5 L20,18.5 L20,17.5 L18,15.5 L18,15.5 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Favorited icon

class FavoritedIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M12,17.27 L16.4749285,19.9708873 C17.4166135,20.5392505 17.9756088,20.1238598 17.7275215,19.0604122 L16.54,13.97 L20.4935776,10.5450143 C21.3255517,9.8242748 21.1039192,9.16397645 20.0162679,9.07170006 L14.81,8.63 L12.7827417,3.84682463 C12.3504454,2.82685155 11.6497932,2.82628873 11.2172583,3.84682463 L9.19,8.63 L3.98373208,9.07170006 C2.8881471,9.16464955 2.66950317,9.81999084 3.50642241,10.5450143 L7.46,13.97 L6.27247853,19.0604122 C6.02258154,20.1316169 6.59020578,20.5351347 7.52507152,19.9708873 L12,17.27 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Caret up icon

class CaretUpIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M8.0085302,15 C6.8992496,15 6.63076481,14.3692352 7.4143185,13.5856815 L11.2881596,9.71184039 C11.6812982,9.3187018 12.3225861,9.32258606 12.7118404,9.71184039 L16.5856815,13.5856815 C17.366788,14.366788 17.0980496,15 15.9914698,15 L8.0085302,15 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Caret down icon

class CaretDownIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M8.0085302,9.41844124 C6.8992496,9.41844124 6.63076481,10.049206 7.4143185,10.8327597 L11.2881596,14.7066008 C11.6812982,15.0997394 12.3225861,15.0958552 12.7118404,14.7066008 L16.5856815,10.8327597 C17.366788,10.0516532 17.0980496,9.41844124 15.9914698,9.41844124 L8.0085302,9.41844124 L8.0085302,9.41844124 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Chat icon

class ChatIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M18.3605769,17.4094428 C20.1202011,15.8825206 21,14.0358858 21,11.8694832 C21,9.70308067 20.1202011,7.84992073 18.3605769,6.30994782 C16.6009527,4.76997491 14.4807816,4 12,4 C9.51921837,4 7.39904726,4.76997491 5.63942308,6.30994782 C3.87979889,7.84992073 3,9.70308067 3,11.8694832 C3,13.4094562 3.47595678,14.8189017 4.42788462,16.0978623 L4.51442308,16.1761656 C4.54326937,16.2022669 4.55769231,16.2283677 4.55769231,16.2544689 C4.6730775,16.4632788 4.73076923,16.6590352 4.73076923,16.8417438 L4.04908284,19.3090077 C3.89983524,19.8491875 4.25400864,20.1284194 4.81065895,19.9425381 L7.41346154,19.0733883 C7.52884673,19.0211858 7.70192192,18.995085 7.93269231,18.995085 C8.0192312,18.995085 8.17788346,19.0211858 8.40865385,19.0733883 C8.45192308,19.1060148 8.46634601,19.11254 8.49519231,19.11254 C9.56250534,19.5040585 10.7307629,19.6998148 12,19.6998148 C14.4807816,19.6998148 16.6009527,18.9363651 18.3605769,17.4094428 L18.3605769,17.4094428 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Avatar icon note: The icon must be wrapped in a container div. The container div handles the background, and border-radius. The avatar svg itself should be set to 100% fill this container div.

class AvatarSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M17.1488889,18.9651111 C15.7273333,20.2388889 13.9064444,20.9384444 12,20.9384444 C10.094,20.9384444 8.27333333,20.2393333 6.85177778,18.9653333 C6.84955556,18.9411111 6.84777778,18.9164444 6.84622222,18.8924444 C6.85711111,16.4722222 9.15533333,14.4886667 11.9791111,14.4668889 L11.9951111,14.4666667 L12.0217778,14.4668889 C14.846,14.4886667 17.1446667,16.4731111 17.154,18.8942222 C17.1524444,18.9177778 17.1506667,18.9413333 17.1488889,18.9651111 L17.1488889,18.9651111 Z"></path>
            <path d="M12.0004444,6.20133333 C10.1522222,6.20133333 8.75822222,7.60422222 8.75822222,9.46466667 C8.75822222,11.3268889 10.152,12.7313333 12.0004444,12.7313333 C13.8484444,12.7313333 15.242,11.3268889 15.242,9.46466667 C15.242,7.60422222 13.8484444,6.20133333 12.0004444,6.20133333 L12.0004444,6.20133333 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Shoebox icon

class ShoeboxIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M18.984375,15 L18.984375,5.015625 L4.96875,5.015625 L4.96875,15 L9,15 C9,15.8125041 9.29687203,16.515622 9.890625,17.109375 C10.484378,17.703128 11.1874959,18 12,18 C12.8125041,18 13.515622,17.703128 14.109375,17.109375 C14.703128,16.515622 15,15.8125041 15,15 L18.984375,15 Z M18.984375,3 C19.5156277,3 19.984373,3.19531055 20.390625,3.5859375 C20.796877,3.97656445 21,4.45312219 21,5.015625 L21,18.984375 C21,19.5156277 20.796877,19.984373 20.390625,20.390625 C19.984373,20.796877 19.5156277,21 18.984375,21 L4.96875,21 C4.40624719,21 3.93750188,20.8046895 3.5625,20.4140625 C3.18749812,20.0234355 3,19.5468778 3,18.984375 L3,5.015625 C3,4.45312219 3.18749812,3.97656445 3.5625,3.5859375 C3.93750188,3.19531055 4.40624719,3 4.96875,3 L18.984375,3 Z"></path>
      </ContainerIconSVG>
    );
  }
}


// Todo workspace icon

class TodoIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M21,12 C21,16.9705875 16.9705875,21 12,21 C7.029435,21 3,16.9705875 3,12 C3,7.029435 7.029435,3 12,3 C13.618605,3 15.1374,3.427284 16.449825,4.17520875 L14.7784125,5.8465425 C13.9310962,5.4633225 12.9904612,5.25 12,5.25 C8.27207625,5.25 5.25,8.27207625 5.25,12 C5.25,15.7279125 8.27207625,18.75 12,18.75 C15.7279125,18.75 18.75,15.7279125 18.75,12 L21,12 L21,12 Z M9.5305125,10.2595125 L12.34353,13.0312538 L20.1658125,5.25 L21.8982,6.8265975 L12.34353,16.2760125 L7.84353,12 L9.5305125,10.2595125 L9.5305125,10.2595125 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Delete icon

class DeleteIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M18,5.8203125 L18,7.5 L6,7.5 L6,5.8203125 L8.97986577,5.8203125 L9.86577181,5 L14.1342282,5 L15.0201342,5.8203125 L18,5.8203125 Z M6.84563758,8.3203125 L17.1543624,8.3203125 L17.1543624,18.3203125 C17.1543624,18.763023 16.9798675,19.1536441 16.6308725,19.4921875 C16.2818774,19.8307309 15.8791969,20 15.4228188,20 L8.57718121,20 C8.12080309,20 7.71812255,19.8307309 7.36912752,19.4921875 C7.02013248,19.1536441 6.84563758,18.763023 6.84563758,18.3203125 L6.84563758,8.3203125 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Notes icon

class NotesIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M12.8596491,9.59624413 L17.6900585,9.59624413 L12.8596491,5.20187793 L12.8596491,9.59624413 Z M15.4795322,13.6150235 L15.4795322,12 L8.52046784,12 L8.52046784,13.6150235 L15.4795322,13.6150235 Z M15.4795322,16.8075117 L15.4795322,15.1924883 L8.52046784,15.1924883 L8.52046784,16.8075117 L15.4795322,16.8075117 Z M13.7602339,4 L19,8.80751174 L19,18.4225352 C19,18.8482024 18.8226139,19.2175258 18.4678363,19.5305164 C18.1130587,19.843507 17.703706,20 17.2397661,20 L6.76023392,20 C6.29629398,20 5.88694135,19.843507 5.53216374,19.5305164 C5.17738614,19.2175258 5,18.8482024 5,18.4225352 L5.04093567,5.57746479 C5.04093567,5.15179756 5.21149927,4.78247418 5.55263158,4.46948357 C5.89376389,4.15649296 6.29629398,4 6.76023392,4 L13.7602339,4 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Attachment icon

class AttachmentIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M18.9716364,10.9736239 L11.6625455,17.6905704 C10.2443636,18.9899579 7.93745455,18.9899579 6.52,17.6905704 C5.10254545,16.391183 5.10181818,14.2757615 6.52,12.9757073 L14.2494545,5.91874661 C15.1003636,5.13871411 16.4843636,5.13871411 17.3352727,5.91874661 C18.1854545,6.69877912 18.1861818,7.96683195 17.3352727,8.74686445 L11.1483636,14.3897662 C10.8647273,14.6497771 10.4036364,14.6497771 10.12,14.3897662 C9.83636364,14.1297554 9.83636364,13.7070711 10.12,13.4470603 L15.2785455,8.74686445 L14.2494545,7.80415851 L9.09090909,12.5036877 C8.23854545,13.2850535 8.23927273,14.5524397 9.09090909,15.3331389 C9.94254545,16.1138381 11.3243636,16.1138381 12.176,15.3331389 L18.3629091,9.69023709 C19.0734545,9.03887662 19.4276364,8.18617442 19.4276364,7.33280553 C19.4276364,5.48672861 17.7941818,4 15.7912727,4 C14.8603636,4 13.9301818,4.32534689 13.2196364,4.97670736 L5.49090909,12.0323347 C4.49745455,12.9443727 4,14.1384224 4,15.3331389 C4,17.9085795 6.27636364,20 9.09090909,20 C10.3941818,20 11.6967273,19.543981 12.6909091,18.6332764 L20,11.9163298 L18.9716364,10.9736239 L18.9716364,10.9736239 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Add icon

class AddIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M21,12.2658013 C21,12.8195524 20.5621663,13.2684564 20.0050639,13.2684564 L13.2684564,13.2684564 L13.2684564,20.0050639 C13.2684564,20.5545519 12.8265599,21 12.2658013,21 L11.7341987,21 C11.1804476,21 10.7315436,20.5621663 10.7315436,20.0050639 L10.7315436,13.2684564 L3.99493609,13.2684564 C3.44544806,13.2684564 3,12.8265599 3,12.2658013 L3,11.7341987 C3,11.1804476 3.43783375,10.7315436 3.99493609,10.7315436 L10.7315436,10.7315436 L10.7315436,3.99493609 C10.7315436,3.44544806 11.1734401,3 11.7341987,3 L12.2658013,3 C12.8195524,3 13.2684564,3.43783375 13.2684564,3.99493609 L13.2684564,10.7315436 L20.0050639,10.7315436 C20.5545519,10.7315436 21,11.1734401 21,11.7341987 L21,12.2658013 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Calendar icon

class CalendarIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M17.7775176,18.3887588 L17.7775176,9.6206089 L6.61124122,9.6206089 L6.61124122,18.3887588 L17.7775176,18.3887588 Z M15.3793911,4 L16.9906323,4 L16.9906323,5.61124122 L17.7775176,5.61124122 C18.2021879,5.61124122 18.5768914,5.77361274 18.9016393,6.09836066 C19.2263873,6.42310857 19.3887588,6.79781208 19.3887588,7.22248244 L19.3887588,18.3887588 C19.3887588,18.8134291 19.2263873,19.1881326 18.9016393,19.5128806 C18.5768914,19.8376285 18.2021879,20 17.7775176,20 L6.61124122,20 C6.16159026,20 5.78064169,19.8376285 5.46838407,19.5128806 C5.15612646,19.1881326 5,18.8134291 5,18.3887588 L5,7.22248244 C5,6.79781208 5.15612646,6.42310857 5.46838407,6.09836066 C5.78064169,5.77361274 6.16159026,5.61124122 6.61124122,5.61124122 L7.39812646,5.61124122 L7.39812646,4 L9.00936768,4 L9.00936768,5.61124122 L15.3793911,5.61124122 L15.3793911,4 Z M16.2037471,12.8056206 L16.2037471,16.8149883 L12.1943794,16.8149883 L12.1943794,12.8056206 L16.2037471,12.8056206 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Clock icon

class ClockIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				      <path d="M12,18.6103286 C13.5524334,18.6103286 14.873234,18.0594734 15.9624413,16.9577465 C17.0516486,15.8560195 17.5962441,14.5289592 17.5962441,12.9765258 C17.5962441,11.4240924 17.0516486,10.1032918 15.9624413,9.01408451 C14.873234,7.92487718 13.5524334,7.38028169 12,7.38028169 C10.4475666,7.38028169 9.12676601,7.92487718 8.03755869,9.01408451 C6.94835136,10.1032918 6.40375587,11.4240924 6.40375587,12.9765258 C6.40375587,14.5289592 6.94835136,15.8560195 8.03755869,16.9577465 C9.12676601,18.0594734 10.4475666,18.6103286 12,18.6103286 L12,18.6103286 Z M12,5.76525822 C14.0031399,5.76525822 15.7057833,6.46634667 17.1079812,7.8685446 C18.5101792,9.27074254 19.2112676,10.9733859 19.2112676,12.9765258 C19.2112676,14.9796657 18.5101792,16.6823091 17.1079812,18.084507 C15.7057833,19.486705 14.0031399,20.1877934 12,20.1877934 C9.99686009,20.1877934 8.29421671,19.486705 6.89201878,18.084507 C5.48982085,16.6823091 4.78873239,14.9796657 4.78873239,12.9765258 C4.78873239,10.9733859 5.48982085,9.27074254 6.89201878,7.8685446 C8.29421671,6.46634667 9.99686009,5.76525822 12,5.76525822 L12,5.76525822 Z M12.4131455,8.99530516 L12.4131455,13.2394366 L15.6056338,15.1549296 L14.9671362,16.1314554 L11.2112676,13.8028169 L11.2112676,8.99530516 L12.4131455,8.99530516 Z M8.73239437,5.31455399 L5.01408451,8.35680751 L4,7.15492958 L7.68075117,4.11267606 L8.73239437,5.31455399 Z M20,7.15492958 L18.9859155,8.35680751 L15.2676056,5.20187793 L16.3192488,4 L20,7.15492958 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Extract icon

class ExtractIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				    <path d="M13.7916667,4 L20,4 L20,10.2083333 L18.2083333,10.2083333 L18.2083333,7.04166667 L9.5,15.75 L8.25,14.5 L16.9583333,5.79166667 L13.7916667,5.79166667 L13.7916667,4 Z M18.2083333,18.2083333 L18.2083333,13.1428571 L20,13.1428571 L20,18.2083333 C20,18.6805579 19.8194463,19.0972204 19.4583333,19.4583333 C19.0972204,19.8194463 18.6805579,20 18.2083333,20 L5.79166667,20 C5.29166417,20 4.86805729,19.8194463 4.52083333,19.4583333 C4.17360938,19.0972204 4,18.6805579 4,18.2083333 L4,5.79166667 C4,5.31944208 4.17360938,4.90277958 4.52083333,4.54166667 C4.86805729,4.18055375 5.29166417,4 5.79166667,4 L10.8571429,4 L10.8571429,5.79166667 L5.79166667,5.79166667 L5.79166667,18.2083333 L18.2083333,18.2083333 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Restore icon

class RestoreIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M5.26240894,6.5130731 C6.54846577,5.22701626 8.1045712,4.58399749 9.9307719,4.58399749 L9.9307719,2.10326148 C9.9307719,1.6408478 10.2016361,1.53685161 10.5222454,1.85746098 L13.4675202,4.80273571 C13.794182,5.12939752 13.7881295,5.66507341 13.4675202,5.98568278 L10.5222454,8.93095751 C10.1955836,9.25761932 9.9307719,9.1418131 9.9307719,8.68515701 L9.9307719,6.204421 C8.5932728,6.204421 7.43583901,6.68668508 6.45843581,7.6512277 C5.48103262,8.61577033 4.99233835,9.7796343 4.99233835,11.1428545 C4.99233835,12.5060748 5.48103262,13.6699388 6.45843581,14.6344814 C7.43583901,15.599024 8.5932728,16.0812881 9.9307719,16.0812881 C11.268271,16.0812881 12.4257048,15.599024 13.403108,14.6344814 C14.2793918,13.7697276 14.7628567,12.7447616 14.8535134,11.559558 C14.8639748,11.4227906 14.8692055,11.2838895 14.8692055,11.1428545 L16.5282105,11.1428545 C16.5282105,12.9690553 15.8787615,14.5251607 14.5798441,15.8112175 C13.2809267,17.0972743 11.7312515,17.7402931 9.9307719,17.7402931 C8.13029234,17.7402931 6.5806171,17.0972743 5.28169969,15.8112175 C3.98278229,14.5251607 3.33333333,12.9690553 3.33333333,11.1428545 C3.33333333,9.34237498 3.9763521,7.79912993 5.26240894,6.5130731 Z"></path>
      </ContainerIconSVG>
    );
  }
}


// Remove icon

class RemoveIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M18.4478648,18.6639843 C17.9972393,19.1146098 17.2624082,19.1103869 16.8130035,18.6609822 L12,13.8479787 L7.18699655,18.6609822 C6.73471304,19.1132657 5.99409874,19.1059478 5.55213516,18.6639843 L5.33601574,18.4478648 C4.88539023,17.9972393 4.88961308,17.2624082 5.33901781,16.8130035 L10.1520213,12 L5.33901781,7.18699655 C4.88673431,6.73471304 4.89405215,5.99409874 5.33601574,5.55213516 L5.55213516,5.33601574 C6.00276066,4.88539023 6.73759181,4.88961308 7.18699655,5.33901781 L12,10.1520213 L16.8130035,5.33901781 C17.265287,4.88673431 18.0059013,4.89405215 18.4478648,5.33601574 L18.6639843,5.55213516 C19.1146098,6.00276066 19.1103869,6.73759181 18.6609822,7.18699655 L13.8479787,12 L18.6609822,16.8130035 C19.1132657,17.265287 19.1059478,18.0059013 18.6639843,18.4478648 L18.4478648,18.6639843 L18.4478648,18.6639843 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Emoticon icon

class EmoticonsIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M12,5.33333333 C15.676,5.33333333 18.6666667,8.324 18.6666667,12 C18.6666667,15.676 15.676,18.6666667 12,18.6666667 C8.324,18.6666667 5.33333333,15.676 5.33333333,12 C5.33333333,8.324 8.324,5.33333333 12,5.33333333 L12,5.33333333 Z M12,4 C7.582,4 4,7.582 4,12 C4,16.418 7.582,20 12,20 C16.418,20 20,16.418 20,12 C20,7.582 16.418,4 12,4 L12,4 Z M16,13.3333333 L8,13.3333333 C8.22066667,14.31 9.88466667,16 12.0006667,16 C14.09,16 15.778,14.3193333 16,13.3333333 L16,13.3333333 Z M9.66666667,9.33333333 C9.11466667,9.33333333 8.66666667,9.78066667 8.66666667,10.3333333 C8.66666667,10.886 9.11466667,11.3333333 9.66666667,11.3333333 C10.2186667,11.3333333 10.6666667,10.886 10.6666667,10.3333333 C10.6666667,9.78066667 10.2186667,9.33333333 9.66666667,9.33333333 L9.66666667,9.33333333 Z M14.3333333,9.33333333 C13.7813333,9.33333333 13.3333333,9.78066667 13.3333333,10.3333333 C13.3333333,10.886 13.7813333,11.3333333 14.3333333,11.3333333 C14.8853333,11.3333333 15.3333333,10.886 15.3333333,10.3333333 C15.3333333,9.78066667 14.8853333,9.33333333 14.3333333,9.33333333 L14.3333333,9.33333333 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Menu icon

class MenuIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M5,18 L5,16.5602679 L19,16.5602679 L19,18 L5,18 Z M5,12.703125 L5,11.296875 L16.2,11.296875 L16.2,12.703125 L5,12.703125 Z M5,6 L19,6 L19,7.43973214 L5,7.43973214 L5,6 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// CheckmarkUnchecked icon

class CheckmarkUncheckedIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				  <path d="M4,5.99406028 C4,4.8927712 4.89451376,4 5.99406028,4 L18.0059397,4 C19.1072288,4 20,4.89451376 20,5.99406028 L20,18.0059397 C20,19.1072288 19.1054862,20 18.0059397,20 L5.99406028,20 C4.8927712,20 4,19.1054862 4,18.0059397 L4,5.99406028 L4,5.99406028 Z"></path>
      </ContainerIconSVG>
    );
  }
}

// Checked icon

class CheckedIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				   <path d="M4,5.99406028 C4,4.8927712 4.89451376,4 5.99406028,4 L18.0059397,4 C19.1072288,4 20,4.89451376 20,5.99406028 L20,18.0059397 C20,19.1072288 19.1054862,20 18.0059397,20 L5.99406028,20 C4.8927712,20 4,19.1054862 4,18.0059397 L4,5.99406028 L4,5.99406028 Z"></path>
					 <polygon points="9.808 15.1118881 17.04 8 18 8.94405594 9.808 17 6 13.2552448 6.96 12.3111888"></polygon>
      </ContainerIconSVG>
    );
  }
}

// Back icon

class BackIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<polygon points="16.2773438 6.2578125 10.5351562 12 16.2773438 17.7421875 14.5195312 19.5 7.01953125 12 14.5195312 4.5"></polygon>
      </ContainerIconSVG>
    );
  }
}

// Email icon

class EmailIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M19.2253521,8.63380282 L19.2253521,6.81690141 L12,11.3380282 L4.77464789,6.81690141 L4.77464789,8.63380282 L12,13.1126761 L19.2253521,8.63380282 Z M19.2253521,5 C19.7042277,5 20.1197165,5.18309676 20.471831,5.54929577 C20.8239454,5.91549479 21,6.33802577 21,6.81690141 L21,17.6338028 C21,18.1126785 20.8239454,18.5352094 20.471831,18.9014085 C20.1197165,19.2676075 19.7042277,19.4507042 19.2253521,19.4507042 L4.77464789,19.4507042 C4.29577225,19.4507042 3.88028345,19.2676075 3.52816901,18.9014085 C3.17605458,18.5352094 3,18.1126785 3,17.6338028 L3,6.81690141 C3,6.33802577 3.17605458,5.91549479 3.52816901,5.54929577 C3.88028345,5.18309676 4.29577225,5 4.77464789,5 L19.2253521,5 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Fax icon

class FaxIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M17.488498,3.5 L17.488498,7.11150242 L6.61150242,7.11150242 L6.61150242,3.5 L17.488498,3.5 Z M18.3807515,11.6577467 C18.6356824,11.6577467 18.8552029,11.572771 19.0393196,11.4028171 C19.2234363,11.2328632 19.3154933,11.020424 19.3154933,10.7654931 C19.3154933,10.5105623 19.2234363,10.2910418 19.0393196,10.106925 C18.8552029,9.92280829 18.6356824,9.83075131 18.3807515,9.83075131 C18.1258206,9.83075131 17.9133814,9.92280829 17.7434275,10.106925 C17.5734736,10.2910418 17.488498,10.5105623 17.488498,10.7654931 C17.488498,11.020424 17.5734736,11.2328632 17.7434275,11.4028171 C17.9133814,11.572771 18.1258206,11.6577467 18.3807515,11.6577467 L18.3807515,11.6577467 Z M15.6615026,17.988498 L15.6615026,13.484742 L8.43849777,13.484742 L8.43849777,17.988498 L15.6615026,17.988498 Z M18.3807515,8.04624423 C19.1172184,8.04624423 19.754536,8.31533387 20.2927234,8.85352124 C20.8309107,9.39170861 21.1000004,10.0290262 21.1000004,10.7654931 L21.1000004,16.2039909 L17.488498,16.2039909 L17.488498,19.8154933 L6.61150242,19.8154933 L6.61150242,16.2039909 L3,16.2039909 L3,10.7654931 C3,10.0290262 3.26908965,9.39170861 3.80727701,8.85352124 C4.34546438,8.31533387 4.98278196,8.04624423 5.71924888,8.04624423 L18.3807515,8.04624423 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Settings icon

class SettingsIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M19.6407061,12.98 C19.6818283,12.66 19.7126699,12.34 19.7126699,12 C19.7126699,11.66 19.6818283,11.34 19.6407061,11.02 L21.8098984,9.37 C22.0052286,9.22 22.0566312,8.95 21.9332648,8.73 L19.8771584,5.27 C19.753792,5.05 19.4762176,4.97 19.2500459,5.05 L16.6901934,6.05 C16.1556057,5.65 15.5798959,5.32 14.9527835,5.07 L14.5621232,2.42 C14.5312816,2.18 14.3153905,2 14.0583772,2 L9.94616426,2 C9.68915096,2 9.47325978,2.18 9.44241818,2.42 L9.05175796,5.07 C8.42464549,5.32 7.84893569,5.66 7.31434801,6.05 L4.75449549,5.05 C4.51804325,4.96 4.25074941,5.05 4.12738302,5.27 L2.07127658,8.73 C1.93762966,8.95 1.99931285,9.22 2.19464297,9.37 L4.36383526,11.02 C4.32271314,11.34 4.29187154,11.67 4.29187154,12 C4.29187154,12.33 4.32271314,12.66 4.36383526,12.98 L2.19464297,14.63 C1.99931285,14.78 1.94791019,15.05 2.07127658,15.27 L4.12738302,18.73 C4.25074941,18.95 4.52832378,19.03 4.75449549,18.95 L7.31434801,17.95 C7.84893569,18.35 8.42464549,18.68 9.05175796,18.93 L9.44241818,21.58 C9.47325978,21.82 9.68915096,22 9.94616426,22 L14.0583772,22 C14.3153905,22 14.5312816,21.82 14.5621232,21.58 L14.9527835,18.93 C15.5798959,18.68 16.1556057,18.34 16.6901934,17.95 L19.2500459,18.95 C19.4864982,19.04 19.753792,18.95 19.8771584,18.73 L21.9332648,15.27 C22.0566312,15.05 22.0052286,14.78 21.8098984,14.63 L19.6407061,12.98 L19.6407061,12.98 L19.6407061,12.98 Z M12,16 C9.79428571,16 8,14.2057143 8,12 C8,9.79428571 9.79428571,8 12,8 C14.2057143,8 16,9.79428571 16,12 C16,14.2057143 14.2057143,16 12,16 L12,16 L12,16 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Tag icon

class TagIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
        <path d="M2.00265689,4.01496145 C1.94413344,2.8437131 2.85983256,1.94330654 4.01792041,2.00278499 C4.01792041,2.00278499 10.8278736,2.34645391 11.7047176,2.42780768 C12.5815616,2.50916144 13.0287792,2.47751474 13.5242388,2.97303502 L21.4290321,10.8787964 C21.8118872,11.2616985 22.0022016,11.7470602 21.9999808,12.3348961 C21.99776,12.922732 21.7960579,13.4172619 21.3948683,13.8185007 L13.8195025,21.3947942 C13.4183129,21.7960329 12.9238436,21.9977597 12.3360797,21.9999808 C11.7483157,22.0022018 11.2630135,21.8118642 10.8801583,21.4289621 L2.97536502,13.5232007 C2.47990542,13.0276805 2.52990364,12.6966752 2.43020444,11.7034567 C2.33050524,10.7102382 2.00265689,4.01496145 2.00265689,4.01496145 L2.00265689,4.01496145 Z M9.31878459,6.30289843 C8.48650143,5.47051334 7.13710382,5.47051334 6.30482066,6.30289843 C5.4725375,7.13528352 5.4725375,8.4848464 6.30482066,9.31723149 C7.13710382,10.1496166 8.48650143,10.1496166 9.31878459,9.31723149 C10.1510677,8.4848464 10.1510677,7.13528352 9.31878459,6.30289843 L9.31878459,6.30289843 Z M18.7918136,10.5020048 C19.1746688,10.8849068 19.396589,11.3386588 19.4575808,11.8632743 C19.5185727,12.3878899 19.3914604,12.8078209 19.07624,13.1230799 L13.1241669,19.0758819 C12.8089465,19.3911409 12.389067,19.5182688 11.8645157,19.4572695 C11.3399644,19.3962701 10.886268,19.1743228 10.5034128,18.7914207 L18.7918136,10.5020048 L18.7918136,10.5020048 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Status icon

class StatusIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M17,12 C17,13.3541734 16.5052133,14.5260367 15.515625,15.515625 C14.5260367,16.5052133 13.3541734,17 12,17 C10.6458266,17 9.47396328,16.5052133 8.484375,15.515625 C7.49478672,14.5260367 7,13.3541734 7,12 C7,10.6458266 7.49478672,9.47396328 8.484375,8.484375 C9.47396328,7.49478672 10.6458266,7 12,7 C13.3541734,7 14.5260367,7.49478672 15.515625,8.484375 C16.5052133,9.47396328 17,10.6458266 17,12 L17,12 Z M12,20 C14.1832468,20 16.0623703,19.2124835 17.6374269,17.6374269 C19.2124835,16.0623703 20,14.1832468 20,12 C20,9.81675322 19.2124835,7.93762971 17.6374269,6.3625731 C16.0623703,4.78751649 14.1832468,4 12,4 C9.81675322,4 7.93762971,4.78751649 6.3625731,6.3625731 C4.78751649,7.93762971 4,9.81675322 4,12 C4,14.1832468 4.78751649,16.0623703 6.3625731,17.6374269 C7.93762971,19.2124835 9.81675322,20 12,20 L12,20 Z M12,2 C14.7543174,2 17.1095364,2.97808099 19.0657277,4.9342723 C21.021919,6.89046362 22,9.24568263 22,12 C22,14.7543174 21.021919,17.1095364 19.0657277,19.0657277 C17.1095364,21.021919 14.7543174,22 12,22 C9.24568263,22 6.89046362,21.021919 4.9342723,19.0657277 C2.97808099,17.1095364 2,14.7543174 2,12 C2,9.24568263 2.97808099,6.89046362 4.9342723,4.9342723 C6.89046362,2.97808099 9.24568263,2 12,2 L12,2 Z"></path>
			</ContainerIconSVG>
    );
  }
}


// Play icon

class PlayIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M12,20 C14.1832468,20 16.0623703,19.2124835 17.6374269,17.6374269 C19.2124835,16.0623703 20,14.1832468 20,12 C20,9.81675322 19.2124835,7.93762971 17.6374269,6.3625731 C16.0623703,4.78751649 14.1832468,4 12,4 C9.81675322,4 7.93762971,4.78751649 6.3625731,6.3625731 C4.78751649,7.93762971 4,9.81675322 4,12 C4,14.1832468 4.78751649,16.0623703 6.3625731,17.6374269 C7.93762971,19.2124835 9.81675322,20 12,20 L12,20 Z M12,2 C14.7543174,2 17.1095364,2.97808099 19.0657277,4.9342723 C21.021919,6.89046362 22,9.24568263 22,12 C22,14.7543174 21.021919,17.1095364 19.0657277,19.0657277 C17.1095364,21.021919 14.7543174,22 12,22 C9.24568263,22 6.89046362,21.021919 4.9342723,19.0657277 C2.97808099,17.1095364 2,14.7543174 2,12 C2,9.24568263 2.97808099,6.89046362 4.9342723,4.9342723 C6.89046362,2.97808099 9.24568263,2 12,2 L12,2 Z M10.7721119,16.3565734 C10.3456863,16.7119281 10,16.5443356 10,16.0046024 L10,7.99539757 C10,7.44565467 10.3397772,7.28314769 10.7721119,7.64342655 L15.2278881,11.3565734 C15.6543137,11.7119281 15.6602228,12.2831477 15.2278881,12.6434266 L10.7721119,16.3565734 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Stop icon

class StopIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M6.13999999,7.00247329 C6.13999999,6.44882258 6.59576094,6 7.14247328,6 L17.1375267,6 C17.6911774,6 18.14,6.45576096 18.14,7.00247329 L18.14,16.9975267 C18.14,17.5511774 17.684239,18 17.1375267,18 L7.14247328,18 C6.58882257,18 6.13999999,17.544239 6.13999999,16.9975267 L6.13999999,7.00247329 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Signal None icon

class SignalNoneIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M4.5,3 C4.82258226,3.33723822 6.88573367,5.48709963 10.6895161,9.44964871 C14.4932986,13.4121978 17.3628935,16.4332449 19.2983871,18.5128806 L18.2096774,19.6510539 L15.3467742,16.6580796 L12,21 L2,7.97423888 C2.88710121,7.21545288 3.93547782,6.55503794 5.14516129,5.99297424 L3.41129032,4.1381733 L4.5,3 Z M17.3225806,14.0866511 L8.41129032,4.81264637 C9.62097379,4.53161452 10.8171984,4.3911007 12,4.3911007 C15.4139956,4.3911007 18.7472956,5.58546815 22,7.97423888 L17.3225806,14.0866511 Z" fill-opacity="0.2"></path>
			</ContainerIconSVG>
    );
  }
}

// Signal Low icon

class SignalLowIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M2,8.6746988 C4.78015574,5.55821735 8.12054787,4 12.0212766,4 C15.9220053,4 19.2482132,5.55821735 22,8.6746988 L20.1702128,10.746988 C17.9006979,8.20882265 15.1773209,6.93975904 12,6.93975904 C8.82267915,6.93975904 6.09930213,8.20882265 3.82978723,10.746988 L2,8.6746988 Z" fill-opacity="0.2"></path>
				<path d="M5.65957447,12.7710843 C7.41844851,10.8112352 9.53899468,9.8313253 12.0212766,9.8313253 C14.5035585,9.8313253 16.6099204,10.8112352 18.3404255,12.7710843 L16.5531915,14.8433735 C15.3049583,13.4297118 13.787243,12.7228916 12,12.7228916 C10.212757,12.7228916 8.6950417,13.4297118 7.44680851,14.8433735 L5.65957447,12.7710843 Z" fill-opacity="0.2"></path>
				<path d="M9.27659574,16.9156627 C10.0141881,16.0803171 10.9219804,15.6626506 12,15.6626506 C13.0780196,15.6626506 13.9858119,16.0803171 14.7234043,16.9156627 L12,20 L9.27659574,16.9156627 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Signal Medium icon

class SignalMediumIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M2,8.6746988 C4.78015574,5.55821735 8.12054787,4 12.0212766,4 C15.9220053,4 19.2482132,5.55821735 22,8.6746988 L20.1702128,10.746988 C17.9006979,8.20882265 15.1773209,6.93975904 12,6.93975904 C8.82267915,6.93975904 6.09930213,8.20882265 3.82978723,10.746988 L2,8.6746988 Z" fill-opacity="0.2"></path>
				<path d="M5.65957447,12.7710843 C7.41844851,10.8112352 9.53899468,9.8313253 12.0212766,9.8313253 C14.5035585,9.8313253 16.6099204,10.8112352 18.3404255,12.7710843 L16.5531915,14.8433735 C15.3049583,13.4297118 13.787243,12.7228916 12,12.7228916 C10.212757,12.7228916 8.6950417,13.4297118 7.44680851,14.8433735 L5.65957447,12.7710843 Z"></path>
				<path d="M9.27659574,16.9156627 C10.0141881,16.0803171 10.9219804,15.6626506 12,15.6626506 C13.0780196,15.6626506 13.9858119,16.0803171 14.7234043,16.9156627 L12,20 L9.27659574,16.9156627 Z"></path>
			</ContainerIconSVG>
    );
  }
}

// Signal Full icon

class SignalFullIconSVG extends React.Component {

  render() {
    return (
      <ContainerIconSVG svgStyle={this.props.svgStyle}>
        <title>{this.props.title}</title>
        <desc>{this.props.description}</desc>
				<path d="M2,8.6746988 C4.78015574,5.55821735 8.12054787,4 12.0212766,4 C15.9220053,4 19.2482132,5.55821735 22,8.6746988 L20.1702128,10.746988 C17.9006979,8.20882265 15.1773209,6.93975904 12,6.93975904 C8.82267915,6.93975904 6.09930213,8.20882265 3.82978723,10.746988 L2,8.6746988 Z"></path>
				<path d="M5.65957447,12.7710843 C7.41844851,10.8112352 9.53899468,9.8313253 12.0212766,9.8313253 C14.5035585,9.8313253 16.6099204,10.8112352 18.3404255,12.7710843 L16.5531915,14.8433735 C15.3049583,13.4297118 13.787243,12.7228916 12,12.7228916 C10.212757,12.7228916 8.6950417,13.4297118 7.44680851,14.8433735 L5.65957447,12.7710843 Z"></path>
				<path d="M9.27659574,16.9156627 C10.0141881,16.0803171 10.9219804,15.6626506 12,15.6626506 C13.0780196,15.6626506 13.9858119,16.0803171 14.7234043,16.9156627 L12,20 L9.27659574,16.9156627 Z"></path>
			</ContainerIconSVG>
    );
  }
}


export {
  NotificationsNoneIconSVG,
  NotificationsIconSVG,
  FavoritedIconSVG,
  CaretUpIconSVG,
  CaretDownIconSVG,
  ChatIconSVG,
  AvatarSVG,
  ShoeboxIconSVG,
  TodoIconSVG,
  DeleteIconSVG,
  NotesIconSVG,
  AttachmentIconSVG,
  AddIconSVG,
  CalendarIconSVG,
  ClockIconSVG,
  ExtractIconSVG,
  RestoreIconSVG,
  RemoveIconSVG,
  EmoticonsIconSVG,
  MenuIconSVG,
  CheckmarkUncheckedIconSVG,
  CheckedIconSVG,
  BackIconSVG,
  EmailIconSVG,
  FaxIconSVG,
  SettingsIconSVG,
  TagIconSVG,
  StatusIconSVG,
  PlayIconSVG,
  StopIconSVG,
  SignalNoneIconSVG,
  SignalMediumIconSVG,
  SignalFullIconSVG
};


// require the content propType
// External.propTypes = {
//   content: React.PropTypes.string.isRequired
// };