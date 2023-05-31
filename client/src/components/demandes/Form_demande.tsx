import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Demande, DemandeCreate } from '@/types/Demande'
import { InputWrapper, Input, Textarea, Button, Space, Grid, Col, Group, LoadingOverlay } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import UserSelectList from '@/components/users/SelectList'
import DemandeStatusSelectList from '@/components/demandeStatuses/SelectList2'
import Link from 'next/link';
import { useAuth } from '@/hooks/auth'
import { useDemande } from '@/hooks/demande'

type Props = {
    demande: Demande|DemandeCreate,
    children?: React.ReactNode,
    submitAction: (demande: Demande, callback?: () => void) => Promise<void>
}

const DemandeForm: React.VFC<Props> = ({
    demande,
    children,
    submitAction
}) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, control } = useForm<Demande>()
    const [ isButtonLoading, setIsButtonLoading ] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return () => {
            setIsButtonLoading(false)
        }
    }, [])

    const onSubmit: SubmitHandler<Demande> = data => {
        if (window.confirm('هل أنت متأكد من هذه المعلومات?')) {
        setIsButtonLoading(true)
        const updateData: Demande = {...demande, ...data}

        return submitAction(updateData, () => {
            setIsButtonLoading(false)
        })
    }
    }
    
    const { user } = useAuth();
    const { updateAction, deleteAction, getItem2 } = useDemande()
    const { data: mydemande, error} = getItem2(Number(user?.id))

    // Accessing the user ID
    const userId = user?.id;

    useEffect(() => {
        if (mydemande) {
          setIsLoading(false);
        }
      }, [mydemande]);
    
      if (isLoading) {
        return <div style={{display: 'flex', justifyContent: 'center',padding:'13px'}}>جاري التحميل...</div>;
      }

    if (!mydemande || mydemande.data === null || mydemande.data.length === 0) {
        
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-2'>مرحبًا بكم في خدمة التسجيل بمؤسسة الرعايــة الاجتماعيـة دار الأطفـــال.</div>
                    <hr/>

                    <div>1. معلومات عن المستفيد :</div>
                    <div className="mb-3 mt-3 dsflex steps"> 
                    <input id="input-title" defaultValue={demande.prenom_Beneficiaire}
                        {...register('prenom_Beneficiaire', {
                            required: 's il vous plaît assurez-vous d entrer.',
                            maxLength: {
                                value: 255,
                                message: 'Veuillez entrer moins de 255 caractères.'
                            }
                        })}
                        invalid={errors.prenom_Beneficiaire !== undefined}
                        type="text" className="form-control ms-3" id="exampleFormControlInput1" placeholder="الاسم الشخصي للمستفيد"/> 
                    <input defaultValue={demande.nom_Beneficiaire}
                            {...register('nom_Beneficiaire', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.nom_Beneficiaire !== undefined}
                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="الاسم العائلي للمستفيد"/>
                    </div>
                    < div className="mb-3 mt-3 dsflex steps">
                        <input defaultValue={demande.lieu_naiss}
                            {...register('lieu_naiss', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.lieu_naiss !== undefined}
                        type="text" className="form-control ms-3" id="exampleFormControlInput1" placeholder=" مكان الازدياد وتاريخ الازدياد  "/>
                        <input defaultValue={demande.date_naiss}
                            {...register('date_naiss', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.date_naiss !== undefined}
                        type="date" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    < div style={{alignItems: 'flex-start'}} className="mb-3 mt-3 mb-5 dsflex steps">
                    <input defaultValue={demande.niveau_scolaire}
                            {...register('niveau_scolaire', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.niveau_scolaire !== undefined}
                        type="text" className="form-control ms-3" id="exampleFormControlInput1" placeholder="  المستوى الدراسي "/>
                    <textarea defaultValue={demande.adresse_familiale}
                    {...register('adresse_familiale', {
                        maxLength: {
                            value: 1000,
                            message: 'Veuillez entrer moins de 1000 caractères.'
                        }
                    })}
                    error={errors.adresse_familiale?.message}
                    className="form-control" id="exampleFormControlInput1" rows="1" placeholder="العنوان العائلي "></textarea>
                    </div>
                    <hr/>

                    <div>2 .معلومات عن الولي :</div>

                    <div className="mb-3 mt-3 dsflex">
                    <label style={{display:'flex',alignItems:'center',}} className="form-control-label ms-3" for="input-title"> علاقة الولي بالمستفيد</label>
                    <UserSelectList
                            control={control}
                            selectedId={demande.user_id}
                            errorMessage={errors.user_id?.message}
                        />
                    </div>

                    < div className="mb-3 mt-3 dsflex steps">
                        <input defaultValue={demande.prenom_Tuteur}
                            {...register('prenom_Tuteur', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.prenom_Tuteur !== undefined}
                        type="text" className="form-control ms-3" id="exampleFormControlInput1" placeholder="  الاسم الشخصي للولي "/>
                        <input defaultValue={demande.nom_Tuteur}
                            {...register('nom_Tuteur', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.nom_Tuteur !== undefined}
                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="الاسم العائلي للولي "/>
                    </div>

                    < div className="mb-3 mt-3 dsflex steps">
                        <input defaultValue={demande.CIN_Tuteur}
                            {...register('CIN_Tuteur', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.CIN_Tuteur !== undefined}
                        type="text" className="form-control ms-3" id="exampleFormControlInput1" placeholder="رقم بطاقة التعريف الوطنية وتاريخ انتهاء صلاحيتها "/>
                        <input defaultValue={demande.CIN_date_validation}
                            {...register('CIN_date_validation', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.CIN_date_validation !== undefined}
                        type="date" className="form-control" id="exampleFormControlInput1" />
                
                    </div>

                    < div className="mb-3 mt-3 dsflex steps">
                        <input defaultValue={demande.Tele_Tuteur}
                            {...register('Tele_Tuteur', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.Tele_Tuteur !== undefined}
                        type="number" className="form-control ms-3" id="exampleFormControlInput1" placeholder="الهاتف"/>
                        <input defaultValue={demande.Profession_Tuteur}
                            {...register('Profession_Tuteur', {
                                required: 's il vous plaît assurez-vous d entrer.',
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.Profession_Tuteur !== undefined}
                        type="text" className="form-control" id="exampleFormControlInput1" placeholder="المهنة"/>
                    </div>

                    <div className="mb-5 mt-3 dsflex steps">      
                    <textarea defaultValue={demande.adresse_tuteur}
                    {...register('adresse_tuteur', {
                        maxLength: {
                            value: 1000,
                            message: 'Veuillez entrer moins de 1000 caractères.'
                        }
                    })}
                    error={errors.adresse_tuteur?.message}
                    className="form-control" id="exampleFormControlInput1" rows="1" placeholder="عنوان الولي"></textarea>

                    </div>

                    <hr/>

                    <div style={{paddingRight:'12px'}} className="mt-3 mb-4">
                    
                        <label style={{display:'flex',alignItems:'center'}} className="form-control-label ms-3 mt-3 mb-3" for="input-title">اطلب منكم تسجيل الطفل بمؤسسـة دار الأطفـــال أسفي للرعايــة الاجتماعيـة نظرا ل :</label>
                        <DemandeStatusSelectList
                            control={control}
                            selectedId={demande.raison}
                            errorMessage={errors.raison?.message}
                        />
                        <input Value={userId}
                            {...register('id_user', {   
                                maxLength: {
                                    value: 255,
                                    message: 'Veuillez entrer moins de 255 caractères.'
                                }
                            })}
                            invalid={errors.id_user !== undefined}
                        type="hidden" className="form-control" id="exampleFormControlInput1" />
                    </div>
               
                    <hr/>
                    <div className='mt-2'>المرفقات:</div>
                    <div className='mt-3'>نتائج المدرسة.</div>
                    <div className="mb-3 mt-3 dsflex steps"> 
                        <input id="input-title" defaultValue={demande.img1}
                            {...register('img1', {
                                // required: 's il vous plaît assurez-vous d entrer.',
                            })}
                            invalid={errors.img1 !== undefined}
                            type="file" className="form-control ms-3" 
                            accept="image/*"/> 
                    </div>
                    <hr/>

                    <div> اي مستند  يبرر الحالة (شهادة الوفاة، شهادة الطلاق، الإدمان، مرض الأوصياء أو الوالدين ...).</div>
                    <div className="mb-3 mt-3 dsflex steps"> 
                        <input id="input-title" defaultValue={demande.img2}
                            {...register('img2', {
                                // required: 's il vous plaît assurez-vous d entrer.',
                            })}
                            invalid={errors.img2 !== undefined}
                            type="file" className="form-control ms-3"
                            accept="image/*" /> 
                    </div>

                     {/* <div className="mb-3 mt-3">
                            <input type="file" onChange={handleImageUpload} />
                            {selectedImage && <img style={{maxHeight: '300px'}} src={selectedImage} alt="Selected Image" />}
                    </div> */}

                    <div style={{display: 'flex', justifyContent: 'flex-end'}}> 
                    <Button variant="light" color="gray" onClick={() => router.back()}>الرجوع</Button>
                    <Button style={{backgroundColor:'#5a6f80',}} type="submit" loading={isButtonLoading}>التالي</Button>
                    </div>
            </form>
        )

      } else {
      return (
        <>
        <div style={{display: 'flex', justifyContent: 'center',padding:'25px'}}> تم تسجيل الطلب بالفعل. </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}> 
                <Button variant="light" color="gray" onClick={() => router.back()}>الرجوع</Button>
            </div>
        </>
      )

      }
}

export default DemandeForm
