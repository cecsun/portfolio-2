import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const ProjectPage = () => {
  const { id } = useParams();

  const projects = [
    {
      id: '1',
      title: 'eCom Store',
      description: `For my JavaScript Frameworks project, I designed and developed a fully responsive, user-friendly eCommerce web application using React. This project demonstrates core front-end development skills including routing, API integration, dynamic rendering, state management, form validation, and shopping cart functionality. The goal was to create a seamless user experience from browsing products to completing a purchase, all while maintaining clean, modular, and maintainable code.\n\n The application features five core pages: a Homepage, an Individual Product Page, a Cart Page, a Checkout Success Page, and a Contact Page. The Homepage fetches data from a public API and displays a list of available products using a reusable ProductCard component. Users can search for products using a look-ahead search bar, and clicking a product navigates to a dynamically routed Product Page.\n\n The Product Page displays detailed information about the selected product, including its title, description, image, reviews, and pricing. If a product is on sale, the discount percentage is calculated and displayed alongside the discounted price. An “Add to Cart” button enables users to add the product to their shopping cart, updating the cart state accordingly.\n\n All pages are structured within a shared Layout component that includes a consistent Header and Footer. The Header contains a responsive navigation bar and a Cart Icon component that displays the number of items in the cart and serves as a link to the Cart Page. The Cart Page displays a list of all items in the cart, along with a running total and a Checkout button. Completing the checkout process navigates the user to the Checkout Success Page, where a confirmation message is shown and the cart is cleared. A link is provided for users to return to the store and continue shopping.\n\n The Contact Page includes a form with validation on all fields: full name, subject, email, and message body. Each input has a minimum character requirement, and the email must be in a valid format. Upon successful validation, the form data is logged to the console.\n\n Styling across the application is implemented using styled-components, ensuring modular and scoped styles that support responsiveness across different screen sizes. The application is built to be mobile-friendly and visually consistent.\n\n The project is deployed to Netlify, making it publicly accessible and ready for real-world use. It stands as a demonstration of my ability to build modern, scalable React applications with clean UI design and a strong user experience.`,
      image: '/images/ecom-store.png',
      imageCaption: 'Homepage of the eCom store application',
      liveUrl: 'https://delightful-cocada-88beec.netlify.app/',
      repoUrl: 'https://github.com/cecsun/js-frameworks-ca',
      reflections: 'As part of the project refinement process, I standardized the tab size to 2 spaces for improved code readability and consistency. Additionally, I implemented JSDoc comments throughout the codebase to enhance documentation and maintainability. Revisiting the application allowed me to apply newly acquired skills in state management and component architecture, resulting in a more polished and professional final product.',
    },
    {
      id: '2',
      title: 'Auction House',
      description: `This project marks the culmination of knowledge and practical skills developed over the course of three semesters, with the primary objective of creating a fully functional auction website. The platform was designed to provide a seamless and engaging experience for users, allowing them to browse listings, place bids, and manage their profiles within an intuitive and interactive interface. The focus was placed on building a robust frontend that communicates efficiently with the Noroff Auction API, which handles all essential backend processes such as user authentication, bid tracking, and listing management.\n\n A core feature of the application is its user system. New users who register with a valid email address are automatically awarded 1000 credits, which they can use to participate in auctions. Credits can also be earned by successfully selling items on the platform. While unregistered visitors are welcome to explore and search through the available listings, only registered users have access to key functionalities such as placing bids and creating new listings. This encourages user engagement while maintaining secure access to critical features.\n\n Once registered and logged in, users are able to update their profile avatars, view their available credit balance, create their own auction listings, and place bids on items listed by other users. These interactive elements enhance the overall user experience and demonstrate the effective use of dynamic frontend features in conjunction with real-time API communication.\n\n The development of this project was guided by agile planning methodologies and supported by a range of approved tools and platforms. Design prototypes were created using Figma, project tasks were managed in Trello, and the final product was styled with Bootstrap to ensure responsive design across devices. The website was deployed using Netlify for easy accessibility and performance monitoring. This project showcases a comprehensive application of frontend development practices, API integration, responsive UI/UX design, and structured project management, reflecting the progress and proficiency gained throughout the academic journey.`,
      image: '/images/auction-house.png',
      imageCaption: 'Homepage of the Auction House website',
      liveUrl: 'https://superb-douhua-db3bf4.netlify.app/',
      repoUrl: 'https://github.com/cecsun/semester-project-2',
      reflections: 'After receiving feedback, I made several improvements to this project, including moving live-server to devDependencies, switching to a Bootstrap CDN for better deployment compatibility, adding HTML form validation, and removing alert messages for a cleaner user experience. Revisiting the project gave me the chance to apply new skills and polish the final version, making it more reliable, user-friendly, and ready for real-world use.',
    },
    {
      id: '3',
      title: 'Holidaze',
      description: `Project Exam 2 represents the final milestone after two years of focused learning and development, challenging me to deliver a complete, end-to-end web application. The objective was to showcase a comprehensive understanding of frontend development by planning, designing, building, and deploying a fully functional product. The result is a modern, visually appealing, and user-centered accommodation booking website called Holidaze. This project reflects not only technical proficiency but also thoughtful design and attention to user experience.\n\n The primary goal was to develop a frontend interface for Holidaze, a newly launched accommodation platform. The application allows all users to browse available venues, perform keyword-based searches, and view detailed venue pages that include availability calendars. Additional features are unlocked for registered users: customers can book venues directly through the site, while venue managers have access to tools for managing their own listings. This layered access model creates a versatile and interactive environment for multiple user types.\n\n The design process began with Figma, where I created the visual layout and style guide to ensure consistency and usability. Project planning and task management were handled in Trello, supporting an agile workflow throughout the development process. React was used as the main JavaScript framework, enabling dynamic and responsive component-based architecture, while Bootstrap was integrated to streamline styling and ensure cross-device responsiveness.\n\n User stories were carefully implemented and tested post-development to ensure functionality matched the project brief. I also utilized a range of online tools to assess accessibility, performance, and overall usability, ensuring that the site met modern web standards. Once all features were tested and validated, the application was deployed using Netlify, allowing for fast and reliable hosting with continuous deployment support.\n\n This project is a comprehensive demonstration of my ability to plan, design, and build a scalable frontend solution. It highlights my skills in React development, API integration, UI/UX design, responsive layout techniques, and the ability to manage complex workflows from concept to deployment.`,
      image: '/images/holidaze.png',
      imageCaption: 'Homepage of the accommodation booking site, Holidaze',
      liveUrl: 'https://papaya-mochi-35ab8e.netlify.app/',
      repoUrl: 'https://github.com/cecsun/project-exam-2',
      reflections: 'This project hasn’t been graded yet, so no improvements have been made at this stage. However, I’m proud of how I planned, built, and deployed Holidaze — a complete accommodation booking site developed with React. It showcases my ability to handle complex functionality like user roles, bookings, and venue management, while also focusing on responsive design and user experience. I look forward to applying feedback once it has been received to further polish the project.',
    },
  ];

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  if (!project) {
    return (
      <Container className="py-5">
        <h2>Project Not Found</h2>
        <p>The project you’re looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
    {/* Title + Copy Button Row */}
    <Row className="align-items-center mb-3">
        <Col md={8}>
        <h1 className="mb-0">{project.title}</h1>
        </Col>
        <Col md={4} className="text-md-end mt-3 mt-md-0">
        <Button variant="outline-secondary" onClick={handleCopyLink}>
            🔗 Copy Page Link
        </Button>
        </Col>
    </Row>

    {/* Image */}
    <figure className="text-center mb-5">
        <Image src={project.image} alt="Project screenshot" fluid rounded />
        <figcaption className="mt-2 text-muted">{project.imageCaption}</figcaption>
    </figure>

    {/* Centered Description */}
    <Row className="justify-content-center mb-5">
        <Col md={10}>
        {project.description.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
        ))}
        </Col>
    </Row>

    {/* Links */}
    <Row className="mb-5">
        <Col>
        <h4>Project Links</h4>
        <ul>
            <li>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                🌐 View Live Site
            </a>
            </li>
            <li>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                📄 View GitHub README
            </a>
            </li>
        </ul>
        </Col>
    </Row>

    {/* Reflections */}
    <Row>
        <Col>
        <h4>Reflections & Improvements</h4>
        <p>{project.reflections}</p>
        </Col>
    </Row>
    </Container>

  );
};

export default ProjectPage;
