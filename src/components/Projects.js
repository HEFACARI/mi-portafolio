import { Col, Row, Nav, Tab, Container } from 'react-bootstrap';
// import projImg1 from '../assets/img/project-img1.png';
// import projImg2 from '../assets/img/project-img2.png';
// import projImg3 from '../assets/img/project-img3.png';
import { ProjectCard } from './ProjectCard';
//import { Key } from "react-bootstrap-icons";
import colorSharp2 from '../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';

export const Projects = () => {

  const projects = [
    {
      title: 'Campus Virtual',
      description: 'Este es un campus virtual referenciado hacia las universidades agricolas, donde se tenian diferentes roles como los son estudiantes, profesores y administrador, el rol estudiante podria subir las tareas que le dejaba el profesor en clases, el profesor puede calificar las tareas que los estudiantes habian subido al campues para despues ver sus notas finales, por ultimo el rol administrador tenia control total de la plataforma, ademas de que tiene muchas funcionalidades que el profesor ni el estudiante pueden tener',
      imgUrl: project1,
    },
  ];

  const projects2 = [
    {
      title: "Pagina Web QuiliMusic",
      description: "Esta pagina web fue construida para la escuela de musica QuiliMusic, la cual tenia como base fundamental un sistema CRM donde se podia encontrar mucha informacion de esta escuela, ademas de que tiene otras funcionalidades como guardar los datos de las personas que se encuentran vinculadas a esta, se pueden ver los horarios y fechas de las materias a las cuales los usuarios estaban matriculados",
      imgUrl: project2
    }
  ]

  const projects3 = [
    {
      title: "Pagina Web Colmena Regias",
      description: "Esta es una pagina construida para la colmena regias para crear marketin y poder promocionar mas sus productos y marca",
      imgUrl: project3
    }
  ]

    return(
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({isVisible}) =>
                  <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                    <h2>Projects</h2>
                    <p>
                      He realizado diferentes paginas webs para colmenas y tengo mi propio portafolio que muy pronto sera desplegado, hemos realizado campus virtuales, donde los profesores podian calificar las notas de los estudiantes, estos podrian ver las notas y la calificacion final de cada uno de ellos, dependiendo de las notas obtenidas durante el curso, los estudiantes podian ver sus notas y subir sus tareas. Estos proyectos los hacia con la ayuda de PHP, Bootstrap, HTML Y CSS. Como en este ejemplo anteriormente mencionado, este es uno de los proyectos que hemos realizado y estoy muy contento por compartir, actualmente me encuentro aprendiendo react y django para poder crear mas y mejores paginas webs o CRUDs
                    </p>
                  </div>
                }  
              </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        //En cada iteracion se retorna un componente projectCard
                        projects.map((project, index) => {
                          return(
                            /*<p>{Project.title}</p>*/
                            <ProjectCard
                              Key={index} //se utiliza para proporcionar una clave unica a cada elemento renderizado por el metodo map
                              {...project} //Esta es una sintaxis spread pasa todas las propiedades del objeto "project" como props del componente "projectCard" es equivalente a escribir "title={project.title}", "description={project.description}", "imgUrl={imgUrl}"
                            />
                          );
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>

                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>          
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}/>
      </section>
    );
};