package com.artgallery.repository;

import com.artgallery.model.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, Long> {

    @Query("SELECT DISTINCT a FROM Artwork a LEFT JOIN FETCH a.images")
    List<Artwork> findAllWithImages();

    @Query("SELECT a FROM Artwork a LEFT JOIN FETCH a.images WHERE a.id = :id")
    Optional<Artwork> findByIdWithImages(Long id);

    List<Artwork> findByTitleContainingIgnoreCase(String title);

    List<Artwork> findByArtistContainingIgnoreCase(String artist);
}
