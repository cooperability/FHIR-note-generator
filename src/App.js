import logo from './CHOIRlogo.png';
import './App.css';
import React, { Component, table, tr, td } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image, BlobProvider } from '@react-pdf/renderer';
import {Dropdown, DropdownButton, DropdownMenu, DropdownItem, Table, tableRow, tableCol, tableCell} from 'react-bootstrap';
import OldAngularTxt from '../src/oldAngular.txt';
import DocRef from './xds-example.json';
import DRX from './DocRefEx.json'


//Pulls up old angular text for reference when coding new components
var sampleText = () => {
  fetch('./oldAngular.txt')
    .then((r) => r.text())
    .then(text => {
      console.log(text);
    })
}


//Same-file stylesheet - should work in final module implementation
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 5,
    border: '5px solid black'

  },
  section: {
    margin: 2,
    padding: 2,
    flexGrow: 0,
  },
  viewport: {
    width: '90%',
    height: '7%',
    padding: 0,
    backgroundColor: 'white',
  },
  image: {
    objectFit: "cover",
  },
  title: {
    fontSize: 20,
    margin: 5,
  },
  subtitle: {
    fontSize: 14,
    margin: 5,
  },
  baseText: {
    fontSize: 11,
  },
  table: {
    display: "table", borderStyle: "solid", borderWidth: 0.2, borderRightWidth: 0, borderBottomWidth: 0, maxWidth: "80%", maxHeight: "30%", borderColor: "black", width:"70%"
  },
  tableRow: {
    margin: "auto", justifyContent: "space-between", border:"1px solid black", width:"inherit",
  },
  tableCol: {
    borderStyle: "solid  black", borderWidth: 0.2, borderLeftWidth: 0, borderTopWidth: 0, height: "5%", border:"1px solid black",
  },
  tableCell: {
    margin: "auto", marginTop: 1, fontSize: 8, borderstyle: "solid",
  }
});

//all of the parameters for final note generation, downloadable as PDF. BlobProvider is a helper which compiles individual files onto the doc.
const MyDoc = ({ idValue }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.viewport}>
        <Image style={styles.image} src={logo || null} />
      </View>
      <View style={styles.title}>
        <Text>Clinical Note for visit 05/27/21</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Type</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Patient Data</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Patient Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Joseph Brown</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>DOB</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>10/05/72</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Languages</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>English</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Ethnicity</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>German</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Attending Physician</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Dr. Jason Ward</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Patient ID</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>09278463</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Race</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Caucasian</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Gender</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Male</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Birth Sex</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Female</Text>
          </View>
        </View>
      </View>
      <View style={styles.title}>
        <Text>Current Condition</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>COPD / Pneumonia</Text>
      </View>
      <View style={styles.title}>
        <Text>Goals</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>1. Pt. will demonstrate productive cough in seated position, 3/4 trials.</Text>
        <Text>2. Pt. will ambulate 150ft with supervision, no assistive device, on level indoor surfaces.</Text>
      </View>
      <View style={styles.title}>
        <Text>Subjective</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>Chronic pain controlled (2/10). Denies nausea, vomiting, chest pain, SOB. Pt. reports not feeling well today -  "I'm very tired"</Text>
      </View>
      <View style={styles.title}>
        <Text>Objective</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>Auscultation findings: scattered rhonchi all lung fields. Chest PT was performed in sitting (ant. and post.). Techniques included percussion, vibration, and shaking. Pt. performed a weak cmbined abdominal and upper cstal cough that was nonbronchospastic, congested, and non-productive. The cough/huff was performed with VC. Pectoral stretch / thoracic cage mobilizations performed in seated position. Pt. given towel roll placed in back of seat to open up ant. chest wall. Strengthening exercises in standing - pt. performed hip flexion, extension, and abduction; knee flexion 10 reps x 1 set B. Pt. performs HEP with supervision (in evenings with wife). Pt. instructed to hold tissue over trach when speaking to prevent infection and explained importance of drinking enough water.</Text>
      </View>
      <View style={styles.title}>
        <Text>Assessment</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>Pt. continues to present with congestion and limitations in coughing prductivity. Pt. has been compliant with evening exercise program, which has results in increased tol to therapeutic exercise regime and an increase in LE strength. Amb. not attemmpted to 20 to pt. report of fatigue. Pt. should be able to tolerate short distance ambulation within the next few days.</Text>
      </View>
      <View style={styles.title}>
        <Text>Plan</Text>
      </View>
      <View style={styles.subtitle}>
        <Text>1.Cont. current exercise plan including CPT;</Text>
        <Text>2.Emphasize productive coughing techniques;</Text>
        <Text>3.Increase strengthening exer reps to 15;</Text>
        <Text>4.Attempt amb. again tomorrow.</Text>

      </View>
    </Page>
  </Document>
);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "09278463",
      list: [1, 2, 3],
      editor: false,
    };
  }

  render() {
    //Sample patient Data for JSON
    var PtData = {
      "resourceType": "Bundle",
      "id": "xds",
      "meta": {
        "lastUpdated": "2013-07-01T13:11:33Z"
      },
      "type": "transaction",
      "entry": [
        {
          "fullUrl": "urn:uuid:3fdc72f4-a11d-4a9d-9260-a9f745779e1d",
          "resource": {
            "resourceType": "DocumentReference",
            "meta": {
              "lastUpdated": "2013-07-01T13:11:33Z"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n\t\t\t\t\t\t<a href=\"http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32\">Document: urn:oid:129.6.58.92.88336</a>undefined, created 24/12/2005\n\t\t\t\t\t</div>"
            },
            "masterIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:oid:129.6.58.92.88336"
            },
            "status": "current",
            "type": {
              "coding": [
                {
                  "system": "http://ihe.net/connectathon/classCodes",
                  "code": "History and Physical",
                  "display": "History and Physical"
                }
              ]
            },
            "category": [
              {
                "coding": [
                  {
                    "system": "http://loinc.org",
                    "code": "47039-3",
                    "display": "Inpatient Admission history and physical note"
                  }
                ]
              }
            ],
            "subject": {
              "reference": "Patient/a2"
            },
            "date": "2013-07-01T23:11:33+10:00",
            "author": [
              {
                "reference": "Practitioner/a3"
              },
              {
                "reference": "Practitioner/a4"
              }
            ],
            "description": "Physical",
            "securityLabel": [
              {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
                    "code": "N",
                    "display": "normal"
                  }
                ]
              }
            ],
            "content": [
              {
                "attachment": {
                  "contentType": "text/plain",
                  "language": "en-US",
                  "url": "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
                  "title": "Physical",
                  "creation": "2005-12-24"
                },
                "format": {
                  "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
                  "code": "urn:ihe:pcc:handp:2008"
                }
              }
            ],
            "context": {
              "period": {
                "start": "2004-12-23T08:00:00+10:00",
                "end": "2004-12-23T08:01:00+10:00"
              },
              "practiceSetting": {
                "coding": [
                  {
                    "system": "http://ihe.net/connectathon/practiceSettingCodes",
                    "code": "General Medicine",
                    "display": "General Medicine"
                  }
                ]
              }
            }
          },
          "request": {
            "method": "POST",
            "url": "DocumentReference"
          }
        },
        {
          "fullUrl": "http://localhost:9556/svc/fhir/Patient/a2",
          "resource": {
            "resourceType": "Patient",
            "id": "a2",
            "meta": {
              "lastUpdated": "2013-07-01T13:11:33Z"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Person DOE, John, M, dob: 27/05/1956</div>"
            },
            "identifier": [
              {
                "use": "usual",
                "value": "MRN"
              }
            ],
            "name": [
              {
                "use": "usual",
                "text": "DOE, John",
                "family": "Doe",
                "given": [
                  "John"
                ]
              }
            ],
            "birthDate": "1956-05-27"
          },
          "request": {
            "method": "POST",
            "url": "Patient",
            "ifNoneExist": "Patient?identifier=http://acme.org/xds/patients!89765a87b"
          }
        },
        {
          "fullUrl": "http://localhost:9556/svc/fhir/Practitioner/a3",
          "resource": {
            "resourceType": "Practitioner",
            "id": "a3",
            "meta": {
              "lastUpdated": "2013-07-01T13:11:33Z"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Author Gerald Smitty @ Cleveland Clinic</div>"
            },
            "name": [
              {
                "use": "usual",
                "family": "Smitty",
                "given": [
                  "Gerald"
                ]
              }
            ]
          },
          "request": {
            "method": "POST",
            "url": "Practitioner"
          }
        },
        {
          "fullUrl": "http://localhost:9556/svc/fhir/Practitioner/a4",
          "resource": {
            "resourceType": "Practitioner",
            "id": "a4",
            "meta": {
              "lastUpdated": "2013-07-01T13:11:33Z"
            },
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Author Person @ Cleveland Clinic</div>"
            },
            "name": [
              {
                "use": "usual",
                "family": "Dopplemeyer",
                "given": [
                  "Sherry"
                ]
              }
            ]
          },
          "request": {
            "method": "POST",
            "url": "Practitioner"
          }
        },
        {
          "fullUrl": "http://localhost:9556/svc/fhir/Binary/1e404af3-077f-4bee-b7a6-a9be97e1ce32",
          "resource": {
            "resourceType": "Binary",
            "id": "1e404af3-077f-4bee-b7a6-a9be97e1ce32",
            "meta": {
              "lastUpdated": "2013-07-01T13:11:33Z"
            },
            "contentType": "text/plain",
            "data": "YXNkYXNkYXNkYXNkYXNk"
          },
          "request": {
            "method": "POST",
            "url": "Binary"
          }
        }
      ]
    };

    //Sample Document Reference type JSON
    var DocRefExample = { 
        "resourceType": "DocumentReference",
         "id": "example",
         "text": {
           "status": "generated",
           "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>contained</b>: </p><p><b>masterIdentifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: current</p><p><b>docStatus</b>: preliminary</p><p><b>type</b>: Outpatient Note <span>(Details : {LOINC code '34108-1' = 'Outpatient Note', given as 'Outpatient Note'})</span></p><p><b>category</b>: History and Physical <span>(Details : {http://ihe.net/xds/connectathon/classCodes code 'History and Physical' = 'History and Physical', given as 'History and Physical'})</span></p><p><b>subject</b>: <a>Patient/xcda</a></p><p><b>date</b>: 24/12/2005 9:43:41 AM</p><p><b>author</b>: </p><ul><li><a>Practitioner/xcda1</a></li><li>id: a2; Gerald Smitty </li></ul><p><b>authenticator</b>: <a>Organization/f001</a></p><p><b>custodian</b>: <a>Organization/f001</a></p><h3>RelatesTos</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Target</b></td></tr><tr><td>*</td><td>appends</td><td><a>DocumentReference/example</a></td></tr></table><p><b>description</b>: Physical</p><p><b>securityLabel</b>: very restricted <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-Confidentiality code 'V' = 'very restricted', given as 'very restricted'})</span></p><h3>Contents</h3><table><tr><td>-</td><td><b>Attachment</b></td><td><b>Format</b></td></tr><tr><td>*</td><td/><td>History and Physical Specification (Details: urn:oid:1.3.6.1.4.1.19376.1.2.3 code urn:ihe:pcc:handp:2008 = 'urn:ihe:pcc:handp:2008', stated as 'History and Physical Specification')</td></tr></table><h3>Contexts</h3><table><tr><td>-</td><td><b>Encounter</b></td><td><b>Event</b></td><td><b>Period</b></td><td><b>FacilityType</b></td><td><b>PracticeSetting</b></td><td><b>SourcePatientInfo</b></td><td><b>Related</b></td></tr><tr><td>*</td><td><a>Encounter/xcda</a></td><td>Arm <span>(Details : {http://ihe.net/xds/connectathon/eventCodes code 'T-D8200' = 'T-D8200', given as 'Arm'})</span></td><td>23/12/2004 8:00:00 AM --&gt; 23/12/2004 8:01:00 AM</td><td>Outpatient <span>(Details : {http://www.ihe.net/xds/connectathon/healthcareFacilityTypeCodes code 'Outpatient' = 'Outpatient', given as 'Outpatient'})</span></td><td>General Medicine <span>(Details : {http://www.ihe.net/xds/connectathon/practiceSettingCodes code 'General Medicine' = 'General Medicine', given as 'General Medicine'})</span></td><td><a>Patient/xcda</a></td><td><a>Patient/xcda</a></td></tr></table></div>"
         },
         "contained": [
           {
             "resourceType": "Practitioner",
             "id": "a2",
             "name": [
               {
                 "family": "Smitty",
                 "given": [
                   "Gerald"
                 ]
               }
             ]
           }
         ],
         "masterIdentifier": {
           "system": "urn:ietf:rfc:3986",
           "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7"
         },
         "identifier": [
           {
             "system": "urn:ietf:rfc:3986",
             "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234"
           }
         ],
         "status": "current",
         "docStatus": "preliminary",
         "type": {
           "coding": [
             {
               "system": "http://loinc.org",
               "code": "34108-1",
               "display": "Outpatient Note"
             }
           ]
         },
         "category": [
           {
             "coding": [
               {
                 "system": "http://ihe.net/xds/connectathon/classCodes",
                 "code": "History and Physical",
                 "display": "History and Physical"
               }
             ]
           }
         ],
         "subject": {
           "reference": "Patient/xcda"
         },
         "date": "2005-12-24T09:43:41+11:00",
         "author": [
           {
             "reference": "Practitioner/xcda1"
           },
           {
             "reference": "#a2"
           }
         ],
         "authenticator": {
           "reference": "Organization/f001"
         },
         "custodian": {
           "reference": "Organization/f001"
         },
         "relatesTo": [
           {
             "code": "appends",
             "target": {
               "reference": "DocumentReference/example"
             }
           }
         ],
         "description": "Physical",
         "securityLabel": [
           {
             "coding": [
               {
                 "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
                 "code": "V",
                 "display": "very restricted"
               }
             ]
           }
         ],
         "content": [
           {
             "attachment": {
               "contentType": "application/hl7-v3+xml",
               "language": "en-US",
               "url": "http://example.org/xds/mhd/Binary/07a6483f-732b-461e-86b6-edb665c45510",
               "size": 3654,
               "hash": "2jmj7l5rSw0yVb/vlWAYkK/YBwk=",
               "title": "Physical",
               "creation": "2005-12-24T09:35:00+11:00"
             },
             "format": {
               "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
               "code": "urn:ihe:pcc:handp:2008",
               "display": "History and Physical Specification"
             }
           }
         ],
         "context": {
           "encounter": [
             {
               "reference": "Encounter/xcda"
             }
           ],
           "event": [
             {
               "coding": [
                 {
                   "system": "http://ihe.net/xds/connectathon/eventCodes",
                   "code": "T-D8200",
                   "display": "Arm"
                 }
               ]
             }
           ],
           "period": {
             "start": "2004-12-23T08:00:00+11:00",
             "end": "2004-12-23T08:01:00+11:00"
           },
           "facilityType": {
             "coding": [
               {
                 "system": "http://www.ihe.net/xds/connectathon/healthcareFacilityTypeCodes",
                 "code": "Outpatient",
                 "display": "Outpatient"
               }
             ]
           },
           "practiceSetting": {
             "coding": [
               {
                 "system": "http://www.ihe.net/xds/connectathon/practiceSettingCodes",
                 "code": "General Medicine",
                 "display": "General Medicine"
               }
             ]
           },
           "sourcePatientInfo": {
             "reference": "Patient/xcda"
           },
           "related": [
             {
               "reference": "Patient/xcda",
               "identifier": {
                 "system": "urn:ietf:rfc:3986",
                 "value": "urn:oid:1.3.6.1.4.1.21367.2005.3.7.2345"
               }
             }
           ]
         }
    };

    //Testing the JSON Features
    var result = [];
    for(var i in PtData) {
      result.push([i, PtData[i]]);
    }
    var result2 = [];
    for (var j in result) {
      var refined = PtData[j]
      result2.push(refined, PtData[i][j])
    }
    var DocRefResult = [];
    for(var i in DocRefExample) {
      DocRefResult.push([i, DocRefExample[i]]);
    }
    var DocRefResult2 = [];
    for (var j in DocRefResult) {
      var refined = DocRefExample[j]
      DocRefResult2.push(refined, DocRefExample[i][j])
    }
    return (
      <div className="App" style={{ display: "flex", flexDirection: "column", height:"1000px" }} >
        <img src={logo || "./CHOIRlogo.png"} style={{ maxWidth: "50%" }} ></img>
        <button className="active">
          <PDFDownloadLink document={<MyDoc />} fileName="Patient Note.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Download...' : 'Download Patient Note')}
          </PDFDownloadLink>
        </button>
        <button onClick={() => { console.log(`${ OldAngularTxt }`) }}>Console Display Angular Code for Comparison (Cooper)</button>
        
        /*This button opens the editor, allowing the clinician access to change any patient data,
        plus alter their record in any way they'd like and additionally change the note's destination */

        <button>
          {this.state.editor
            ? <div style={{display: "flex", flexDirection: "row" }}>
              <span>Patient ID</span>
              <input value={this.state.value} type="text" onChange={(e) => this.setState({ value: e.target.value })} />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>Select Tools:</span>
              <Dropdown styles={{display:"inline-block"}}>
                <Dropdown.Toggle id="dropdown-basic" variant="success">Select Instruments</Dropdown.Toggle>
                <Dropdown.Menu styles={{display:"flex", flexDirection:"column", background:"white", border:"1px solid black"}}>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-1">PROMIS Pain Intensity</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-2">Pain Bothersomeness</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">RolandMorris Disability Questionnaire</Dropdown.Item>
                  <br></br>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown styles={{display:"inline-block"}}>
                <Dropdown.Toggle id="dropdown-basic" variant="success">Select Item to Edit</Dropdown.Toggle>
                <Dropdown.Menu styles={{display:"flex", flexDirection:"column"}}>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-1">Resource Type</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">Patient Name</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">Medication Statement</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">Medication Plan</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">Tx Plan</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-2">Note Date</Dropdown.Item>
                  <br></br>
                  <Dropdown.Item styles={{display:"inline-block"}} href="#/action-3">Provider Signature</Dropdown.Item>
                  <br></br>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            : <span onClick={() => { this.setState({ editor: !this.state.editor }) }}>Open Editor</span>
          }
        </button>

        /*some space to think */
        <br></br>        <br></br>        <br></br>        <br></br>



        <div style={{margin:10}}>
          <span>Tx Type / Hash: {DocRef.resourceType}</span>
          <br></br>
          <span>Last updated: {DocRef.meta.lastUpdated}</span>
          <br></br>
        </div>
        <div style={{margin:10}}>
          <span>Tx Type: {DRX.resourceType}</span>
          <br></br>
          <span>Last updated: {DocRef.meta.lastUpdated}</span>
          <br></br>
          <span>Master Identifier Txn Hash: {DRX.masterIdentifier.system}</span>
          <br></br>
          <span>Master Identifier Txn ID: {DRX.masterIdentifier.value}</span>
          <br></br>
          <span>Date Executed: {DRX.masterIdentifier.value}</span>
          <br></br>
        </div>
        <div>
        <div>
      </div>
      <div>
        <table>
        <tr><th>Parsed Raw Data</th></tr>
          <tbody>
          {result2.map((item, i) => (
          <tableRow key={i}>
            <tableCol style={styles.tableCol}>
              <tableCell style={styles.tableCell}><span>{JSON.stringify(i)}</span></tableCell>
            </tableCol>
            <tableCol style={styles.tableCol}>
              <tableCell style={styles.tableCell}><span>{JSON.stringify(item)}</span></tableCell>
            </tableCol>
            <br></br>
          </tableRow>
          ))}
          {/* {DocRefResult2.map((item, i) => (
          <tableRow style={styles.tableRow} key={i}>
            <tableCol style={styles.tableCol}>
              <tableCell style={styles.tableCell}><span>{JSON.stringify(i)}</span></tableCell>
            </tableCol>
            <tableCol style={styles.tableCol}>
              <tableCell style={styles.tableCell}><span>{JSON.stringify(item)}</span></tableCell>
            </tableCol>
            <br></br>
          </tableRow>
          ))} */}
          </tbody>
        </table>
        </div>


        <BlobProvider document={MyDoc({ value: this.state.value })}>
          {({ url }) => <iframe src={url} style={{ width: '100%', height: '300px' }} />}
        </BlobProvider>
      </div>
      </div>
      
    );
  }

}

export default App;
