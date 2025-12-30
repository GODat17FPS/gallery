package com.artgallery.config;

import com.artgallery.model.Artwork;
import com.artgallery.model.ArtworkImage;
import com.artgallery.repository.ArtworkRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

        @Bean
        CommandLineRunner seedDatabase(ArtworkRepository artworkRepository) {
                return args -> {
                        // Only seed if database is empty
                        if (artworkRepository.count() > 0) {
                                return;
                        }

                        // Image 0: Pencil sketch - Portrait of a determined man
                        Artwork artwork1 = new Artwork(
                                        "Inner Strength",
                                        "Anubhav",
                                        "A powerful pencil sketch capturing a moment of intense focus and determination. The fine hatching and detailed shading bring out the character and resilience in the subject's gaze.");
                        artwork1.addImage(new ArtworkImage("/images/determiantion.jpg"));
                        artworkRepository.save(artwork1);

                        // Image 1: Pencil sketch - A curious pug
                        Artwork artwork2 = new Artwork(
                                        "Peeking Curiosity",
                                        "Anubhav",
                                        "A charming and expressive sketch of a pug peeking over an edge. The artist has masterfully captured the breed's unique features and soulful eyes, making it an instant favorite for animal lovers.");
                        artwork2.addImage(new ArtworkImage("/images/pug.jpg"));
                        artworkRepository.save(artwork2);

                        // Image 2: Pencil sketch - Man with head in hand
                        Artwork artwork3 = new Artwork(
                                        "The Weight of Dreams",
                                        "Anubhav",
                                        "A deeply emotive piece reflecting exhaustion and contemplation. The artist uses soft gradients and precise lines to convey a sense of introspection and quiet strength amidst struggle.");
                        artwork3.addImage(new ArtworkImage("/images/contemplation.jpg"));
                        artworkRepository.save(artwork3);

                        // Image 3: Detailed eye sketch with blue iris
                        Artwork artwork4 = new Artwork(
                                        "Windows to the Soul",
                                        "Anubhav",
                                        "A hyper-realistic study of the human eye, featuring a striking blue iris that serves as a focal point. The detailed textures of the skin and reflection in the eye create a captivating, lifelike effect.");
                        artwork4.addImage(new ArtworkImage("/images/eye.jpg"));
                        artworkRepository.save(artwork4);

                        // Image 4: Face with water/tears
                        Artwork artwork5 = new Artwork(
                                        "Liquid Sorrow",
                                        "Anubhav",
                                        "A stunning exploration of transparency and emotion. This piece captures the delicate interplay of water and the human face, creating a powerful visual metaphor for cleansing or grief.");
                        artwork5.addImage(new ArtworkImage("/images/liquid_sorrow.jpg"));
                        artworkRepository.save(artwork5);

                        // --- Batch 2 ---

                        // Image 6: Interstellar
                        Artwork artwork6 = new Artwork(
                                        "Stay (Interstellar)",
                                        "Anubhav",
                                        "A heart-wrenching pencil recreation of the iconic moment between Cooper and Murph. The sketch beautifully captures the raw emotion and paternal bond at the core of the cosmic journey.");
                        artwork6.addImage(new ArtworkImage("/images/interstellar.jpg"));
                        artworkRepository.save(artwork6);

                        // Image 7: The Weeknd
                        Artwork artwork7 = new Artwork(
                                        "Starboy Vibes",
                                        "Anubhav",
                                        "A stylish pencil portrait of Abel Tesfaye (The Weeknd). The artist has accurately captured the artist's signature aesthetic, lighting, and charismatic presence through masterful shading.");
                        artwork7.addImage(new ArtworkImage("/images/the_weeknd.jpg"));
                        artworkRepository.save(artwork7);

                        // Image 8: Goku
                        Artwork artwork8 = new Artwork(
                                        "Ascended Saiyan",
                                        "Anubhav",
                                        "An energetic and high-contrast sketch of Son Goku in his Super Saiyan form. The sharp lines and dynamic proportions perfectly convey the power and legendary status of the character.");
                        artwork8.addImage(new ArtworkImage("/images/goku.jpg"));
                        artworkRepository.save(artwork8);

                        // Image 9: Jake Gyllenhaal
                        Artwork artwork9 = new Artwork(
                                        "The Method Actor",
                                        "Anubhav",
                                        "A striking ballpoint pen portrait of Jake Gyllenhaal. The intricate blue ink strokes create a unique texture, highlighting the intensity and depth in the actor's facial features.");
                        artwork9.addImage(new ArtworkImage("/images/jake_gyllenhaal.jpg"));
                        artworkRepository.save(artwork9);

                        // Image 10: Irrfan Khan
                        Artwork artwork10 = new Artwork(
                                        "Legacy of a Legend",
                                        "Anubhav",
                                        "A touching pencil tribute to the late Irrfan Khan. The sketch captures the subtle elegance and profound wisdom in his eyes, honoring his immense contribution to global cinema.");
                        artwork10.addImage(new ArtworkImage("/images/irrfan_khan.jpg"));
                        artworkRepository.save(artwork10);

                        // --- Batch 3 ---

                        // Image 11: Anne Hathaway
                        Artwork artwork11 = new Artwork(
                                        "Effortless Muse",
                                        "Anubhav",
                                        "A graceful and detailed pencil sketch of Anne Hathaway. The artist has beautifully rendered the flow of her hair and the soft, expressive features that capture her timeless elegance.");
                        artwork11.addImage(new ArtworkImage("/images/anne_hathaway.jpg"));
                        artworkRepository.save(artwork11);

                        // Image 12: Messi Celebration
                        Artwork artwork12 = new Artwork(
                                        "Triumph (Messi)",
                                        "Anubhav",
                                        "A dynamic high-contrast sketch of Lionel Messi in a characteristic moment of celebration. The use of deep shadows against bright highlights emphasizes the raw energy and passion of the iconic player.");
                        artwork12.addImage(new ArtworkImage("/images/messi_celebration.jpg"));
                        artworkRepository.save(artwork12);

                        // Image 13: Wisdom in Smoke
                        Artwork artwork13 = new Artwork(
                                        "Wisdom in Smoke",
                                        "Anubhav",
                                        "A hyper-realistic study of aging and reflection. The intricate wrinkles and the ethereal smoke trails create a sense of deep history and a long life of experiences.");
                        artwork13.addImage(new ArtworkImage("/images/wisdom_in_smoke.jpg"));
                        artworkRepository.save(artwork13);

                        // Image 14: Messi World Cup
                        Artwork artwork14 = new Artwork(
                                        "The Ultimate Prize",
                                        "Anubhav",
                                        "A poignant sketch capturing the moment Lionel Messi kisses the World Cup trophy. This piece serves as a beautiful tribute to perseverance and the realization of a lifelong dream.");
                        artwork14.addImage(new ArtworkImage("/images/messi_world_cup.jpg"));
                        artworkRepository.save(artwork14);

                        // Image 15: Neymar Smile
                        Artwork artwork15 = new Artwork(
                                        "Joy of the Game",
                                        "Anubhav",
                                        "An infectious and spirited sketch of Neymar Jr. smiling. The artist has captured the charismatic and playful nature of the Brazilian star, reflecting the pure joy of the sport.");
                        artwork15.addImage(new ArtworkImage("/images/neymar_smile.jpg"));
                        artworkRepository.save(artwork15);

                        System.out.println("✓ Database seeded with " + artworkRepository.count() + " artworks!");
                };
        }
}
