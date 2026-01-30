/**
 * Document Requirements Database
 * Based on specifications from /md/2026_01_29.md
 *
 * This file contains all document requirements for CNI services
 */

const DOCUMENT_REQUIREMENTS = {
  cni: {
    'nouvelle-demande': {
      'case-a': {
        title: 'Né(e) en Côte d\'Ivoire',
        documents: [
          {
            name: 'Copie intégrale/extrait d\'acte de naissance ou acte de notoriété "en vue de l\'établissement de la CNI"',
            validity: '< 2 ans',
            required: true,
            icon: 'bi-file-earmark-text',
            notes: 'Document original obligatoire'
          },
          {
            name: 'Certificat de nationalité',
            validity: '< 2 ans',
            required: true,
            icon: 'bi-award',
            notes: 'Si possible CNI d\'un parent ayant servi à l\'établissement du certificat'
          },
          {
            name: 'Reçu d\'enrôlement',
            validity: null,
            required: true,
            icon: 'bi-receipt',
            notes: 'Preuve d\'enrôlement biométrique'
          },
          {
            name: 'Justificatif de profession',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-briefcase',
            notes: 'Pour professions réglementées uniquement',
            link: 'https://www.oneci.ci/downloads/files/ONECI-liste-des-mtiers-dits-sensibles.pdf'
          },
          {
            name: 'Document de mariage (pour femme mariée)',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-heart',
            notes: 'Copie acte de naissance avec mention mariage, ou acte de mariage, ou livret de mariage'
          }
        ]
      },
      'case-b': {
        title: 'Né(e) hors Côte d\'Ivoire',
        documents: [
          {
            name: 'Acte de naissance délivré par l\'ambassade CI du pays de naissance ou par le Ministère des Affaires Étrangères CI',
            validity: null,
            required: true,
            icon: 'bi-file-earmark-text',
            notes: 'Document officiel requis'
          },
          {
            name: 'Certificat de nationalité',
            validity: null,
            required: true,
            icon: 'bi-award',
            notes: 'Si possible avec CNI d\'un parent'
          },
          {
            name: 'Reçu d\'enrôlement',
            validity: null,
            required: true,
            icon: 'bi-receipt',
            notes: 'Preuve d\'enrôlement biométrique'
          },
          {
            name: 'Justificatif de profession',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-briefcase',
            notes: 'Pour professions réglementées uniquement'
          },
          {
            name: 'Document de mariage (pour femme mariée)',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-heart',
            notes: 'Copie acte de naissance avec mention mariage, ou acte de mariage, ou livret de mariage'
          }
        ]
      },
      'case-c': {
        title: 'Naturalisation ou acquisition de la nationalité ivoirienne',
        documents: [
          {
            name: 'Acte de naissance CI (si né(e) en CI) ou acte de naissance traduit et certifié',
            validity: null,
            required: true,
            icon: 'bi-file-earmark-text',
            notes: 'Traduction certifiée si nécessaire'
          },
          {
            name: 'Décret de naturalisation',
            validity: null,
            required: true,
            icon: 'bi-file-earmark-check',
            notes: 'Document officiel de naturalisation'
          },
          {
            name: 'Certificat de nationalité',
            validity: null,
            required: true,
            icon: 'bi-award',
            notes: 'Preuve de la nationalité ivoirienne'
          },
          {
            name: 'Reçu d\'enrôlement',
            validity: null,
            required: true,
            icon: 'bi-receipt',
            notes: 'Preuve d\'enrôlement biométrique'
          },
          {
            name: 'Justificatif de profession',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-briefcase',
            notes: 'Pour professions réglementées uniquement'
          },
          {
            name: 'Document de mariage (pour femme mariée)',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-heart',
            notes: 'Copie acte de naissance avec mention mariage, ou acte de mariage, ou livret de mariage'
          }
        ]
      },
      'case-d': {
        title: 'Acquisition de la nationalité par mariage',
        documents: [
          {
            name: 'Acte de naissance CI ou du pays de naissance avec traduction certifiée',
            validity: null,
            required: true,
            icon: 'bi-file-earmark-text',
            notes: 'Document original ou traduction certifiée'
          },
          {
            name: 'CNI RNPP du conjoint ivoirien',
            validity: null,
            required: true,
            icon: 'bi-person-badge',
            notes: 'Carte nationale d\'identité du conjoint'
          },
          {
            name: 'Certificat de nationalité',
            validity: null,
            required: true,
            icon: 'bi-award',
            notes: 'Preuve de la nationalité ivoirienne'
          },
          {
            name: 'Reçu d\'enrôlement',
            validity: null,
            required: true,
            icon: 'bi-receipt',
            notes: 'Preuve d\'enrôlement biométrique'
          },
          {
            name: 'Justificatif de profession',
            validity: 'Pas de limite de date',
            required: false,
            conditional: true,
            icon: 'bi-briefcase',
            notes: 'Pour professions réglementées uniquement'
          },
          {
            name: 'Acte de mariage enregistré à l\'état civil ivoirien',
            validity: null,
            required: true,
            icon: 'bi-heart-fill',
            notes: 'Document officiel enregistré en Côte d\'Ivoire'
          },
          {
            name: 'Lettres de non-opposition/non-déclination/acquisition par mariage authentifiées à la DACP',
            validity: null,
            required: true,
            icon: 'bi-file-earmark-ruled',
            notes: 'Documents authentifiés par la DACP'
          }
        ]
      }
    },
    'renouvellement': {
      title: 'Renouvellement CNI',
      documents: [
        {
          name: 'CNI à renouveler (ou photocopie, ou fiche identité ONECI, ou tout document avec numéro de CNI)',
          validity: null,
          required: true,
          icon: 'bi-person-badge',
          notes: 'Document original ou copie avec numéro CNI visible'
        },
        {
          name: 'Justificatif de la profession',
          validity: null,
          required: true,
          icon: 'bi-briefcase',
          notes: 'Document attestant de la profession actuelle'
        },
        {
          name: 'Certificat de nationalité',
          validity: '< 2 ans',
          required: true,
          icon: 'bi-award',
          notes: 'De préférence via e-justice.ci'
        },
        {
          name: 'Acte de naissance/extrait original',
          validity: '< 2 ans',
          required: true,
          icon: 'bi-file-earmark-text',
          notes: 'Document original obligatoire'
        },
        {
          name: 'Reçu d\'enrôlement',
          validity: null,
          required: true,
          icon: 'bi-receipt',
          notes: 'Preuve d\'enrôlement biométrique'
        }
      ]
    },
    'modifications': {
      title: 'Modifications CNI',
      useImages: true,
      imagePath: '../assets/cni-modification/',
      notes: 'Voir images de référence pour les documents requis selon le type de modification'
    },
    'duplicata': {
      title: 'Duplicata CNI',
      documents: [
        {
          name: 'Attestation de déclaration de perte délivrée par autorités compétentes',
          validity: null,
          required: true,
          icon: 'bi-file-earmark-x',
          notes: 'Déclaration officielle de perte ou vol'
        },
        {
          name: 'Copie recto/verso de la CNI égarée, ou fiche identité ONECI, ou tout document comportant le NNI',
          validity: null,
          required: true,
          icon: 'bi-person-badge',
          notes: 'Copie de l\'ancienne CNI si disponible'
        },
        {
          name: 'Acte de naissance/extrait',
          validity: null,
          required: true,
          icon: 'bi-file-earmark-text',
          notes: 'Document officiel'
        },
        {
          name: 'Reçu d\'enrôlement',
          validity: null,
          required: true,
          icon: 'bi-receipt',
          notes: 'Preuve d\'enrôlement biométrique'
        }
      ]
    },
    'demande-nni': {
      title: 'Demande de NNI',
      useImages: true,
      imagePath: '../assets/cni-demande-de-nni/',
      notes: 'Voir image de référence pour les documents requis'
    }
  }
};

/**
 * Get document requirements for a specific service, sub-service, and case type
 * @param {string} service - Service category (e.g., 'cni')
 * @param {string} subservice - Sub-service type (e.g., 'nouvelle-demande')
 * @param {string} caseType - Case type (e.g., 'case-a') - optional
 * @returns {object} Document requirements object
 */
function getDocumentRequirements(service, subservice, caseType = null) {
  if (!DOCUMENT_REQUIREMENTS[service]) {
    console.error(`Service '${service}' not found in DOCUMENT_REQUIREMENTS`);
    return null;
  }

  if (!DOCUMENT_REQUIREMENTS[service][subservice]) {
    console.error(`Sub-service '${subservice}' not found for service '${service}'`);
    return null;
  }

  const subserviceData = DOCUMENT_REQUIREMENTS[service][subservice];

  // If sub-service has case types and a specific case is requested
  if (caseType && subserviceData[caseType]) {
    return subserviceData[caseType];
  }

  // Return the sub-service data directly if no case types
  return subserviceData;
}

/**
 * Render document checklist as HTML
 * @param {string} service - Service category
 * @param {string} subservice - Sub-service type
 * @param {string} caseType - Case type (optional)
 * @returns {string} HTML string for document checklist
 */
function renderDocumentChecklist(service, subservice, caseType = null) {
  const requirements = getDocumentRequirements(service, subservice, caseType);

  if (!requirements) {
    return '<p class="text-danger">Aucun document trouvé pour cette configuration.</p>';
  }

  // Handle image-based requirements
  if (requirements.useImages) {
    return `
      <div class="alert alert-info">
        <h5><i class="bi bi-images me-2"></i>${requirements.title}</h5>
        <p>${requirements.notes}</p>
        <p class="mb-0"><strong>Chemin des images:</strong> <code>${requirements.imagePath}</code></p>
      </div>
    `;
  }

  // Handle document-based requirements
  let html = '';

  if (requirements.title) {
    html += `<h5 class="mb-3"><i class="bi bi-folder2-open me-2"></i>${requirements.title}</h5>`;
  }

  if (!requirements.documents || requirements.documents.length === 0) {
    return html + '<p class="text-muted">Aucun document spécifié.</p>';
  }

  html += '<div class="document-list">';

  requirements.documents.forEach((doc, index) => {
    const badge = doc.required
      ? '<span class="badge bg-danger ms-2">Obligatoire</span>'
      : doc.conditional
        ? '<span class="badge bg-warning text-dark ms-2">Conditionnel</span>'
        : '<span class="badge bg-secondary ms-2">Optionnel</span>';

    const validityBadge = doc.validity
      ? `<span class="badge bg-info ms-2">${doc.validity}</span>`
      : '';

    html += `
      <div class="document-item mb-3 p-3 border rounded">
        <div class="d-flex align-items-start">
          <div class="me-3">
            <i class="bi ${doc.icon} text-primary" style="font-size: 1.5rem;"></i>
          </div>
          <div class="flex-grow-1">
            <div class="fw-bold mb-1">
              ${index + 1}. ${doc.name}
              ${badge}
              ${validityBadge}
            </div>
            ${doc.notes ? `<small class="text-muted d-block mb-2">${doc.notes}</small>` : ''}
            ${doc.link ? `<a href="${doc.link}" target="_blank" class="btn btn-sm btn-outline-primary"><i class="bi bi-link-45deg"></i> Voir la liste</a>` : ''}
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';

  return html;
}

/**
 * Get sub-service title for display
 * @param {string} subservice - Sub-service identifier
 * @returns {string} Display title
 */
function getSubserviceTitle(subservice) {
  const titles = {
    'nouvelle-demande': 'Nouvelle Demande CNI',
    'renouvellement': 'Renouvellement CNI',
    'modifications': 'Modifications CNI',
    'duplicata': 'Duplicata CNI',
    'demande-nni': 'Demande de NNI'
  };

  return titles[subservice] || subservice;
}

/**
 * Get case type title for display
 * @param {string} caseType - Case type identifier
 * @returns {string} Display title
 */
function getCaseTypeTitle(caseType) {
  const titles = {
    'case-a': 'Cas A - Né(e) en Côte d\'Ivoire',
    'case-b': 'Cas B - Né(e) hors Côte d\'Ivoire',
    'case-c': 'Cas C - Naturalisation',
    'case-d': 'Cas D - Acquisition par mariage'
  };

  return titles[caseType] || caseType;
}

/**
 * Check if a sub-service has case types
 * @param {string} service - Service category
 * @param {string} subservice - Sub-service type
 * @returns {boolean} True if sub-service has case types
 */
function hasCaseTypes(service, subservice) {
  const subserviceData = DOCUMENT_REQUIREMENTS[service]?.[subservice];
  if (!subserviceData) return false;

  return Boolean(subserviceData['case-a'] || subserviceData['case-b'] ||
                 subserviceData['case-c'] || subserviceData['case-d']);
}

/**
 * Get available case types for a sub-service
 * @param {string} service - Service category
 * @param {string} subservice - Sub-service type
 * @returns {array} Array of case type identifiers
 */
function getAvailableCaseTypes(service, subservice) {
  const subserviceData = DOCUMENT_REQUIREMENTS[service]?.[subservice];
  if (!subserviceData) return [];

  const caseTypes = [];
  if (subserviceData['case-a']) caseTypes.push('case-a');
  if (subserviceData['case-b']) caseTypes.push('case-b');
  if (subserviceData['case-c']) caseTypes.push('case-c');
  if (subserviceData['case-d']) caseTypes.push('case-d');

  return caseTypes;
}
