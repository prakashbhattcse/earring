import React from 'react'
import { ContactWrapper,HeroWrapper,HeroTitle,HeroSubtitle, ContactContent, ContactTitle, ContactForm, FormLabel, FormInput, FormTextarea, FormButton } from './contactStyles'

const contact = () => {
    return (
        // <div>hell</div>
        <ContactWrapper>
            <HeroWrapper>
                <HeroTitle>Contact Us</HeroTitle>
                <HeroSubtitle>Get in touch with us today</HeroSubtitle>
            </HeroWrapper>
            {/* <ContactContent>
                <ContactTitle>Contact Us</ContactTitle>
                <ContactForm>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <FormInput type="text" id="name" name="name" />

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" name="email" />

                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextarea id="message" name="message" rows="5"></FormTextarea>

                    <FormButton>Send</FormButton>
                </ContactForm>
            </ContactContent> */}
        </ContactWrapper>
    )
}

export default contact