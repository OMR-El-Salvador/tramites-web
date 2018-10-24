[1mdiff --git a/src/screens/Procedure/Detail.js b/src/screens/Procedure/Detail.js[m
[1mindex 179aae7..4ee9d0d 100644[m
[1m--- a/src/screens/Procedure/Detail.js[m
[1m+++ b/src/screens/Procedure/Detail.js[m
[36m@@ -68,12 +68,24 @@[m [mconst currencies = {[m
   'colon': '₡'[m
 }[m
 [m
[32m+[m[32mconst legislationTypes = {[m
[32m+[m[32m  'regulation': 'Reglamento de Ley',[m
[32m+[m[32m  'law': 'Ley',[m
[32m+[m[32m  'constitution': 'Constitutición',[m
[32m+[m[32m  'other': 'Otro',[m
[32m+[m[32m  'non_existent': 'No existe',[m
[32m+[m[32m  'ministerial_agreement': 'Acuerdo ministerial',[m
[32m+[m[32m  'international_treaty': 'Tratado internacional',[m
[32m+[m[32m  'technical_regulation': 'Reglamento técnico',[m
[32m+[m[32m  'executive_order': 'Decreto ejecutivo'[m
[32m+[m[32m}[m
[32m+[m
 export default class ProcedureDetailScreen extends Component {[m
   constructor(props) {[m
     super(props);[m
     this.state = {[m
       id: this.props.match.params.id,[m
[31m-      data: { procedure: { name: '', institution: {}}, class: { name: ''}}[m
[32m+[m[32m      data: { procedure: { name: '', institution: {}}, class: { name: ''}, legal_base: []}[m
     };[m
   }[m
 [m
[36m@@ -83,7 +95,7 @@[m [mexport default class ProcedureDetailScreen extends Component {[m
     //   'addresses(detail,schedule,phone,responsible_name,responsible_position,'+[m
     //   'municipality(name, department(name)))';[m
     let legalBasePath =[m
[31m-      'legal_base(type,legislation_name,legislation_reference,legal_topic(name))';[m
[32m+[m[32m      'legal_base(id,type,legislation_name,legislation_reference,legal_topic(name))';[m
     let procedurePath = 'procedure(name,institution(name))';[m
     let formsPath = 'forms(name,url)';[m
     let classPath = 'class(name)';[m
[36m@@ -104,9 +116,12 @@[m [mexport default class ProcedureDetailScreen extends Component {[m
   render() {[m
     return ([m
       <div>[m
[31m-        <section className='text-left' id='section-procedures' style={sectionStyle}>[m
[32m+[m[32m        <section[m
[32m+[m[32m            className='text-left procedure-detail justify-content-center align-items-center'[m
[32m+[m[32m            id='section-procedures'[m
[32m+[m[32m            style={sectionStyle}>[m
           <div className='container'>[m
[31m-            <div className='row align-items-center justify-content-center procedure-detail'>[m
[32m+[m[32m            <div className='row '>[m
               <div className='col-md-12'>[m
                 <div className='row'>[m
                   <div className='col-md-12' style={headerStyle}>[m
[36m@@ -145,32 +160,16 @@[m [mexport default class ProcedureDetailScreen extends Component {[m
                     <div className='row' style={generalElementStyle}>[m
                       <div className='col-md-12'>[m
                         <h5>¿Cuál es su base legal?</h5>[m
[31m-                          <table className='table table-bordered table-striped table-hover'>[m
[32m+[m[32m                          <table className='table table-bordered table-striped table-hover w-100 d-block d-md-table'>[m
                             <tbody>[m
[31m-                              <tr>[m
[31m-                                <td>Fundamento que da origen al trámite</td>[m
[31m-                                <td>art. 50, 115 Reglamento del Código Tributario.</td>[m
[31m-                              </tr>[m
[31m-                              <tr>[m
[31m-                                <td>Institución/Unidad responsable</td>[m
[31m-                                <td>art. 34 Código tributario</td>[m
[31m-                              </tr>[m
[31m-                              <tr>[m
[31m-                                <td>Requisitos</td>[m
[31m-                                <td>Todo Instrucciones de Trabajo</td>[m
[31m-                              </tr>[m
[31m-                              <tr>[m
[31m-                                <td>Plazos de respuesta</td>[m
[31m-                                <td>Todo Instrucciones de Trabajo</td>[m
[31m-                              </tr>[m
[31m-                              <tr>[m
[31m-                                <td>Vigencia</td>[m
[31m-                                <td></td>[m
[31m-                              </tr>[m
[31m-                              <tr>[m
[31m-                                <td>Tarifas o derechos</td>[m
[31m-                                <td></td>[m
[31m-                              </tr>[m
[32m+[m[32m                              {[m
[32m+[m[32m                                this.state.data.legal_base.map(lb => ([m
[32m+[m[32m                                  <tr key={lb.id}>[m
[32m+[m[32m                                    <td>{lb.legal_topic.name}</td>[m
[32m+[m[32m                                    <td>{!lb.legislation_name?'No Existe':lb.legislation_name}</td>[m
[32m+[m[32m                                  </tr>[m
[32m+[m[32m                                ))[m
[32m+[m[32m                              }[m
                             </tbody>[m
                           </table>[m
                       </div>[m
[36m@@ -253,39 +252,6 @@[m [mexport default class ProcedureDetailScreen extends Component {[m
                     </div>[m
                   </div>[m
                 </div>[m
[31m-                <div className='row procedure-legal-base'>[m
[31m-                  <div className='col-md-12'>[m
[31m-                    <h6>Base legal</h6>[m
[31m-                    <table className='table table-bordered table-striped table-hover'>[m
[31m-                      <tbody>[m
[31m-                        <tr>[m
[31m-                          <td>Fundamento que da origen al trámite</td>[m
[31m-                          <td>art. 50, 115 Reglamento del Código Tributario.</td>[m
[31m-                        </tr>[m
[31m-                        <tr>[m
[31m-                          <td>Institución/Unidad responsable</td>[m
[31m-                          <td>art. 34 Código tributario</td>[m
[31m-                        </tr>[m
[31m-                        <tr>[m
[31m-                          <td>Requisitos</td>[m
[31m-                          <td>Todo Instrucciones de Trabajo</td>[m
[31m-                        </tr>[m
[31m-                        <tr>[m
[31m-                          <td>Plazos de respuesta</td>[m
[31m-                          <td>Todo Instrucciones de Trabajo</td>[m
[31m-                        </tr>[m
[31m-                        <tr>[m
[31m-                          <td>Vigencia</td>[m
[31m-                          <td></td>[m
[31m-                        </tr>[m
[31m-                        <tr>[m
[31m-                          <td>Tarifas o derechos</td>[m
[31m-                          <td></td>[m
[31m-                        </tr>[m
[31m-                      </tbody>[m
[31m-                    </table>[m
[31m-                  </div>[m
[31m-                </div>[m
               </div>[m
             </div>[m
           </div>[m
