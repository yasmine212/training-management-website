
import { gql } from "@apollo/client";

export const GET_FORMATIONS = gql`
  query {
    findAllFormations {
      id
      courseName
      description
      duration
      price
      formateurNom
      formateurPrenom
      formateurEmail
      formateurSpecialite
    }
  }
`;
export const CREATE_FORMATION = gql`
  mutation CreateFormation($createFormationInput: CreateFormationInput!) {
    createFormation(createFormationInput: $createFormationInput) {
      id
      courseName
      description
      duration
      price
      cover
      hoverCover
      backgroundImage
      formateurNom
      formateurPrenom
      formateurEmail
      formateurSpecialite
    }
  }
`;

export const DELETE_FORMATION = gql`
  mutation DeleteFormation($id: Int!) {
    deleteFormation(id: $id) {
      id
    }
  }
`;

/*export const GET_FORMATEURS = gql`
  query {
    findAllFormateurs {
      id
      nom
      prenom
      email
      specialite
      formation {
        id
        courseName
      }
    }
  }
`;

export const CREATE_FORMATEUR = gql`
  mutation CreateFormateur($input: CreateFormateurInput!) {
    createFormateur(input: $input) {
      id
      nom
      prenom
      email
      specialite
    }
  }
`;

export const ASSIGN_FORMATION_TO_FORMATEUR = gql`
  mutation AssignFormationToFormateur($formateurId: Int!, $formationId: Int!) {
    assignFormationToFormateur(formateurId: $formateurId, formationId: $formationId) {
      id
      nom
      prenom
      formation {
        id
        courseName
      }
    }
  }
`;*/