import { Ontology } from './../models/ontology.model';

export const ONTOLOGIES: Ontology [] = [
    {
        id: 1,
        title: 'Rioter ontology to meet Physical and Digital Worlds',
        license: 'MIT',
        serialization: ['JSON-LD', 'RDF/XML', 'N-Triples', 'TTL'],
        authors: ['Aitor Corchero', 'Eugene Westerhof', 'Lluis Echeverria', 'Xavier Domingo'],
        domain: ['IoT', 'Water', 'Environment', 'Agriculture'],
        description:  'SAREF extension towards water and their nexus domain',
        url: 'https://rioter-project.github.io/rioter-core-ontology/'
    },
    {
        id: 2,
        title: 'Water Nexus Ontology to support generation of policies',
        license: 'MIT',
        serialization: ['JSON-LD', 'RDF/XML', 'N-Triples', 'TTL'],
        authors: ['Aitor Corchero', 'Eugene Westerhof', 'Lluis Echeverria', 'Janez Susnik', 'Sara Masia', 'Xavier Domingo'],
        domain: ['Water', 'Environment', 'Agriculture', 'Land', 'Climate', 'Water-Economics'],
        description:  'Extension of Rioter towards modeling nexus variables and game parameters.',
        url: 'https://rioter-project.github.io/rioter-nexus-variables-ontology/'
    },
    {
        id: 3,
        title: 'Cyber-Physic Risk Management Ontology in Critical Infrastructures',
        license: 'MIT',
        serialization: ['JSON-LD', 'RDF/XML', 'N-Triples', 'TTL'],
        authors: ['Aitor Corchero', 'Achim Mälzer', 'Enric Bonet', 'Fabian Vollmer', 'George Karavokiros'],
        domain: ['Water', 'Risk', 'Critical Infrastructures'],
        description:  'Ontology focused on representing risk management procedures in critical infrastructures',
        url: 'https://rioter-project.github.io/rioter-risk-ontology/'
    }
];
